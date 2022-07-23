from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, Match, db



matches_routes = Blueprint('matches', __name__)


@matches_routes.route('/<int:id>', methods=['POST'])
@login_required
def add_match(id):
    data = request.json
    userId = data[userId]
    userId2 = data[userId2]
    db.session.delete(to_delete)
    db.session.commit()

    return {'imageId': id}

@matches_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def unmatch(id):
    to_edit = ProfileImage.query.get(id)
    data = request.json
    to_edit.title = data['title']
    db.session.commit()

    return {'image': to_edit.to_dict()}
