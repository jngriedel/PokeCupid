from .db import db

from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
import datetime


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(255), nullable=False, unique=True)
    gender = db.Column(db.String(10), nullable=False)
    bio = db.Column(db.String(2000), nullable=False)
    hashedPassword = db.Column(db.String(255), nullable=False)
    pokemonId = db.Column(db.Integer, db.ForeignKey('pokemon.id') nullable=False)
    createdAt = db.Column(db.DateTime, default=datetime.datetime.now(), nullable=False)

    #relationship
    profileImage = db.relationship('ProfileImage', back_populates='users')
    answers = db.relationship('Answer', back_populates='users')
    pokemon = db.relationship('Pokemon', back_populates='users')
    messages = db.relationship('Message', back_populates='users')
    matches = db.relationship('Match', back_populates='users')

    @property
    def password(self):
        return self.hashedPassword

    @password.setter
    def password(self, password):
        self.hashedPassword = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email,
            'gender': self.gender,
            'bio': self.bio,
            'pokemonId': self.pokemonId
        }
