from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import Length, DataRequired


class Bio(FlaskForm):
    bio = StringField('bio', validators=[DataRequired(), Length(max=300), Length(min=15)])
