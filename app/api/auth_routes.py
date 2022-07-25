from flask import Blueprint, jsonify, session, request
from app.models import User, ProfileImage, db, Match, Pokemon
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
    form = SignUpForm()
    form['csrf_token'].data = request.cookies['csrf_token']


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






        login_user(user)
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route('/unauthorized')
def unauthorized():
    """
    Returns unauthorized JSON when flask-login authentication fails
    """
    return {'errors': ['Unauthorized']}, 401
