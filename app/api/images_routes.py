from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, ProfileImage, db



images_routes = Blueprint('images', __name__)


@images_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def remove_Image(id):
    to_delete = ProfileImage.query.get(id)
    db.session.delete(to_delete)
    db.session.commit()

    return {'imageId': id}

@images_routes.route('/<int:id>', methods=['PATCH'])
@login_required
def edit_Image(id):
    to_edit = ProfileImage.query.get(id)
    data = request.json
    to_edit.title = data['title']
    db.session.commit()

    return {'image': to_edit.to_dict()}
