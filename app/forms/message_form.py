from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Length

class MessageForm(FlaskForm):
    message = StringField(
        "message",
        validators=[DataRequired(), Length(1, 200, message="Message cannot be more than 200 characters.")])
