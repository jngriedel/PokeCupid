from flask import Blueprint, jsonify, session, request
from flask_login import login_required, current_user
from app.models import db, Match, Message
from app.forms import MessageForm

message_routes = Blueprint("messages", __name__)

# Renders WTF errors as list
def errors_list(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@message_routes.route("/<int:messageId>", methods=["GET", "PUT", "DELETE"])
@login_required
def edit_delete_message(messageId):
    if request.method == "PUT":
        form = MessageForm()
        if form.validate_on_submit():
            message = Message.query.get(messageId)
            message.message = form.data["message"]
            db.session.commit()
            return { "message": message.to_dict() }

        return {'errors': errors_list(form.errors)}, 401

    if request.method == "DELETE":
        message = Message.query.get(messageId)
        match_id = message.matchId
        db.session.delete(message)
        db.session.commit()

        match = Match.query.get(match_id)

        return { "message": match.to_dict() }