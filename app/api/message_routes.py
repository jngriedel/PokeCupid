from flask import Blueprint, jsonify, session, request
from flask_login import login_required, current_user
from app.models import db, Match, Message, User
from app.forms import MessageForm
import datetime

message_routes = Blueprint("messages", __name__)

# Renders WTF errors as list
def errors_list(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@message_routes.route("/<int:matchId>")
@login_required
def get_messages(matchId):
    all_messages = Message.query.filter(Message.matchId == matchId)
    return {
        "messages":[message.to_dict() for message in all_messages]
    }

@message_routes.route("/", methods=["POST"])
@login_required
def new_message():
    form = MessageForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        newMessage = form.data["message"]
        data = request.json
        matchId1 = data['matchId']
        add_message = Message(
            content = newMessage,
            userId = current_user.id,
            matchId = matchId1,
            createdAt = datetime.datetime.now())
        db.session.add(add_message)
        db.session.commit()
        return{
            "message": add_message.to_dict()
        }
    return {'Failed'}, 401

@message_routes.route("/<int:messageId>", methods=["PUT", "DELETE"])
@login_required
def edit_delete_message(messageId):

    if request.method == "PUT":
        form = MessageForm()
        if form.validate_on_submit():
            message = Message.query.get(messageId)
            message.content = form.data["message"]
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
