
from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, ProfileImage, db
#aws imports
from app.aws import (upload_file_to_s3, allowed_file, get_unique_filename)



user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.filter(User.id != current_user.id)
    print(users)
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route('/<int:id>/images')
@login_required
def user_profile_images(id):
    userProfileImages = ProfileImage.query.filter(ProfileImage.userId == id)

    return jsonify({'images' :[image.to_dict() for image in userProfileImages]})



@user_routes.route('/<int:id>/images', methods=['POST'])
@login_required
def add_profile_image(id):
    if "image" not in request.files:

        return {"errors": "image required"}, 400

    image = request.files["image"]

    if not allowed_file(image.filename):

        return {"errors": "file type not permitted"}, 400

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
