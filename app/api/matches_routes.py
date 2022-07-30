from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, Match, db
import datetime



matches_routes = Blueprint('matches', __name__)


@matches_routes.route('/', methods=['POST'])
@login_required
def add_match():
    data = request.json
    liker = data['liker']
    liked = int(data['liked'])

    possibleLike = Match.query.filter(Match.userId == liked, Match.userId2 == liker).scalar()

    if possibleLike:
        possibleLike.matched = True
        possibleLike.matchTime = datetime.datetime.now()

        db.session.commit()
        return {'match' : possibleLike.to_dict()}

    else:
        new_Match = Match(userId=liker, userId2 = liked)
        db.session.add(new_Match)
        db.session.commit()
        return {'matchId': new_Match.to_dict()}

@matches_routes.route('/pass', methods=['POST'])
@login_required
def pass_user():
    data = request.json

    liker = data['liker']

    passedId = data['passedId']


    possiblePass = Match.query.filter(Match.userId == passedId, Match.userId2 == liker).scalar()

    if possiblePass:
        possiblePass.notInterested = True


        db.session.commit()
        return {'message' : 'Not interested!'}

    else:
        new_Match = Match(userId=liker, userId2 = passedId, notInterested = True)
        db.session.add(new_Match)
        db.session.commit()
        return {'message' : 'Not interested!'}

@matches_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def unmatch(id):
    to_delete = Match.query.get(id)
    db.session.delete(to_delete)
    db.session.commit()

    return {'matchId': id}

@matches_routes.route('/<int:id>')
@login_required
def get_user_matches(id):
    allmatches = Match.query.filter(Match.matched == True)


    return {'userMatches': [match.to_dict() for match in allmatches if match.userId is current_user.id or match.userId2 is current_user.id ]}
