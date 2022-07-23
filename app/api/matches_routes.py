from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, Match, db



matches_routes = Blueprint('matches', __name__)


@matches_routes.route('/', methods=['POST'])
@login_required
def add_match():
    data = request.json
    liker = data['liker']
    liked = int(data['liked'])

    possibleLike = Match.query.filter(Match.userId == liked, Match.userId2 == liker)

    if possibleLike:
        possibleLike[0]['matched'] = True

        db.session.commit()
        return {'match' : possibleLike.to_dict()}

    else:
        new_Match = Match(userId=liker, userId2 = liked)
        db.session.add(new_Match)
        db.session.commit()
        return {'matchId': new_Match.id}

@matches_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def unmatch(id):
    to_delete = Match.query.get(id)
    db.session.delete(to_delete)
    db.session.commit()

    return {'matchId': id}
