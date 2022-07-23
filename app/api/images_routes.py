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
