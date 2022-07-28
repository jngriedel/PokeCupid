from flask import Blueprint, jsonify, session, request
from app.models import User, ProfileImage, db, Match, Pokemon, Answer
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required
# from sqlalchemy.orm import joinedload

auth_routes = Blueprint('auth', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@auth_routes.route('/')
def authenticate():
    """
    Authenticates a user.
    """
    if current_user.is_authenticated:
        return current_user.to_dict()
    return {'errors': ['Unauthorized']}


@auth_routes.route('/login', methods=['POST'])
def login():
    """
    Logs a user in
    """
    form = LoginForm()
    # Get the csrf_token from the request cookie and put it into the
    # form manually to validate_on_submit can be used
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        # Add the user to the session, we are logged in!
        user = User.query.filter(User.email == form.data['email']).first()

        login_user(user)
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route('/logout')
def logout():
    """
    Logs a user out
    """
    logout_user()
    return {'message': 'User logged out'}


@auth_routes.route('/signup', methods=['POST'])
def sign_up():
    """
    Creates a new user and logs them in
    """
    pokemon = db.session.query(Pokemon)
    pokemon_list = [(p.id, p.name) for p in pokemon]
    form = SignUpForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    form.pokemonId.choices = pokemon_list

    if form.validate_on_submit():


        user = User(
            name=form.data['name'],
            email=form.data['email'],
            gender=form.data['gender'],
            bio=form.data['bio'],
            pokemonId=form.data['pokemonId'],
            password=form.data['password']
        )
        db.session.add(user)
        db.session.commit()

        # Make new matches for new user
        ash_match = Match(userId = 1, userId2 = user.id)
        brock_match = Match(userId = 2, userId2 = user.id)
        misty_match = Match(userId = 3, userId2 = user.id)
        jenny_match = Match(userId = 4, userId2 = user.id)
        joy_match = Match(userId = 5, userId2 = user.id)
        surge_match = Match(userId = 6, userId2 = user.id)


        db.session.add(ash_match)
        db.session.add(brock_match)
        db.session.add(misty_match)
        db.session.add(jenny_match)
        db.session.add(joy_match)
        db.session.add(surge_match)
        db.session.commit()


        #Submit new Answers for new User
        data = request.json
        questionAnswers = data['questionAnswers']

        answer1 = Answer(questionId = 1, userId = user.id, content = str(questionAnswers[0]))
        answer2 = Answer(questionId = 2, userId = user.id, content = str(questionAnswers[1]))
        answer3 = Answer(questionId = 3, userId = user.id, content = str(questionAnswers[2]))
        answer4 = Answer(questionId = 4, userId = user.id, content = str(questionAnswers[3]))
        answer5 = Answer(questionId = 5, userId = user.id, content = str(questionAnswers[4]))
        answer6 = Answer(questionId = 6, userId = user.id, content = str(questionAnswers[5]))
        answer7 = Answer(questionId = 7, userId = user.id, content = str(questionAnswers[6]))
        answer8 = Answer(questionId = 8, userId = user.id, content = str(questionAnswers[7]))
        answer9 = Answer(questionId = 9, userId = user.id, content = str(questionAnswers[8]))
        answer10 = Answer(questionId = 10, userId = user.id, content = str(questionAnswers[9]))
        answer11 = Answer(questionId = 11, userId = user.id, content = str(questionAnswers[10]))
        answer12 = Answer(questionId = 12, userId = user.id, content = str(questionAnswers[11]))
        answer13 = Answer(questionId = 13, userId = user.id, content = str(questionAnswers[12]))
        answer14 = Answer(questionId = 14, userId = user.id, content = str(questionAnswers[13]))
        answer15 = Answer(questionId = 15, userId = user.id, content = str(questionAnswers[14]))
        answer16 = Answer(questionId = 16, userId = user.id, content = str(questionAnswers[15]))
        answer17 = Answer(questionId = 17, userId = user.id, content = str(questionAnswers[16]))
        answer18 = Answer(questionId = 18, userId = user.id, content = str(questionAnswers[17]))
        answer19 = Answer(questionId = 19, userId = user.id, content = str(questionAnswers[18]))
        answer20 = Answer(questionId = 20, userId = user.id, content = str(questionAnswers[19]))


        db.session.add(answer1)
        db.session.add(answer2)
        db.session.add(answer3)
        db.session.add(answer4)
        db.session.add(answer5)
        db.session.add(answer6)
        db.session.add(answer7)
        db.session.add(answer8)
        db.session.add(answer9)
        db.session.add(answer10)
        db.session.add(answer11)
        db.session.add(answer12)
        db.session.add(answer13)
        db.session.add(answer14)
        db.session.add(answer15)
        db.session.add(answer16)
        db.session.add(answer17)
        db.session.add(answer18)
        db.session.add(answer19)
        db.session.add(answer20)

        db.session.commit()

        login_user(user)
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route('/unauthorized')
def unauthorized():
    """
    Returns unauthorized JSON when flask-login authentication fails
    """
    return {'errors': ['Unauthorized']}, 401
