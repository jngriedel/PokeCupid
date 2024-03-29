
from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user

from app.models import User, ProfileImage, db, Match, Answer
from app.forms import Bio
from app.api.auth_routes import validation_errors_to_error_messages


#aws imports
from app.aws import (upload_file_to_s3, allowed_file, get_unique_filename)



user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.filter(User.id != current_user.id)

    ##filter blocked and passed
    allBlocked = Match.query.filter(Match.notInterested == True)
    userFilter = [match for match in allBlocked if match.userId is current_user.id or match.userId2 is current_user.id ]
    filteredUsers = []
    for match in userFilter:
        filteredUsers.append(match.userId)
        filteredUsers.append(match.userId2)
    set(filteredUsers)
    ## filter already liked
    userLikes = Match.query.filter(Match.matched == False, Match.userId == current_user.id)
    likedUsers = []
    for like in userLikes:
        likedUsers.append(like.userId2)
    # filter already matched
    allMatches = Match.query.filter(Match.matched == True)
    userMatches = [match for match in allMatches if match.userId is current_user.id or match.userId2 is current_user.id]

    matchedUsers = []
    for match in userMatches:
        matchedUsers.append(match.userId)
        matchedUsers.append(match.userId2)
    set(matchedUsers)



    return {"users": [user.to_dict() for user in users if user.id not in filteredUsers and user.id not in likedUsers and user.id not in matchedUsers] }


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route('/answers/<int:answerId>', methods=["PATCH"])
@login_required
def change_answer(answerId):

    answer = Answer.query.get(answerId)
    data = request.json
    answer.content = str(data["content"])
    db.session.commit()
    updated_user = User.query.get(current_user.id)
    return {'user':updated_user.to_dict()}



@user_routes.route('/<int:id>/bio', methods=['PUT'])
@login_required
def edit_user_bio(id):
    form = Bio()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        to_edit = User.query.get(id)
        data = request.json
        to_edit.bio = data['bio']
        db.session.commit()

        return to_edit.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@user_routes.route('/<int:id>/gender', methods=['PUT'])
@login_required
def edit_user_gender(id):
    to_edit = User.query.get(id)
    data = request.json
    to_edit.gender = data['gender']
    db.session.commit()

    return to_edit.to_dict()

@user_routes.route('/<int:id>/pokemon', methods=['PUT'])
@login_required
def edit_user_pokemon(id):
    to_edit = User.query.get(id)
    data = request.json
    to_edit.pokemonId = data['pokemonId']
    db.session.commit()
    return to_edit.to_dict()

@user_routes.route('/<int:id>/images')
@login_required
def user_profile_images(id):
    userProfileImages = ProfileImage.query.filter(ProfileImage.userId == id)

    return jsonify({'images' :[image.to_dict() for image in userProfileImages]})



@user_routes.route('/<int:id>/images', methods=['POST'])
@login_required
def add_profile_image(id):


    if "image" not in request.files:

        return {"errors": "Image Required."}, 400

    image = request.files["image"]

    if not allowed_file(image.filename):

        return {"errors": "Could not upload - file type must be JPG or PNG."}, 400

    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)

    if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

    url = upload["url"]
    # flask_login allows us to get the current user from the request

    new_image = ProfileImage(userId=current_user.id, imgUrl=url)
    db.session.add(new_image)
    db.session.commit()

    return {"image": new_image.to_dict()}
