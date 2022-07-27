from flask import Blueprint, jsonify, request, session
from flask_login import login_required, current_user
from app.models import User, ProfileImage, db
from app.forms import ImageTitleForm
from app.api.auth_routes import validation_errors_to_error_messages



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
    form = ImageTitleForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        to_edit = ProfileImage.query.get(id)
        to_edit.title = form.data['title']
        db.session.commit()

        return {'image': to_edit.to_dict()}
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
