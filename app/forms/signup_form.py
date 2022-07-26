from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, TextAreaField
from wtforms.validators import DataRequired, Email, ValidationError, Length
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
    name = StringField('Name', validators=[DataRequired(), Length(min=3), Length(max=55)])
    email = StringField('Email', validators=[DataRequired(), user_exists, Length(max=55)])
    gender = SelectField('Gender', validators=[DataRequired()], choices=['Male', 'Female', 'Other'])
    bio = TextAreaField('Bio', validators=[DataRequired(), Length(min=5), Length(max=300)])
    pokemonId = SelectField('pokemonId', choices=[1,2,3,4,5,6,7,8,9,10], validators=[DataRequired()])
    password = StringField('Password', validators=[DataRequired()])
