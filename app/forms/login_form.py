from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, Length
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError('Email provided not found.')


def password_matches(form, field):
    # Checking if password matches
    password = field.data
    email = form.data['email']
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError('Invalid Credentials.')
    if not user.check_password(password):
        raise ValidationError('Invalid Credentials.')


class LoginForm(FlaskForm):
    email = StringField('Email', validators=[DataRequired(), user_exists])
    password = StringField('Password', validators=[
                           DataRequired(), password_matches])
