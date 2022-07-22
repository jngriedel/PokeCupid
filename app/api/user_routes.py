from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, ProfileImage

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
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
