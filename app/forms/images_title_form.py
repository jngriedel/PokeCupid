from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import Length


class ImageTitleForm(FlaskForm):
    title = StringField('title', validators=[Length(max=55)])
