from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, TextAreaField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


# def username_exists(form, field):
#     # Checking if username is already in use
#     username = field.data
#     user = User.query.filter(User.username == username).first()
#     if user:
#         raise ValidationError('Username is already in use.')


class SignUpForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    email = StringField('email', validators=[DataRequired(), user_exists])
    gender = SelectField('gender', validators=[DataRequired()], choices=['Male', 'Female', 'Other'])
    bio = TextAreaField('bio', validators=[DataRequired()])
    pokemonId = SelectField('pokemonId', choices=[1,2,3,4,5,6,7,8,9,10], validators=[DataRequired()])
    password = StringField('password', validators=[DataRequired()])
