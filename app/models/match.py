from .db import db

import datetime


class Match(db.Model):
    __tablename__ = 'matches'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    userId2 = db.Column(db.Integer, db.ForeignKey('users.id'))
    createdAt = db.Column(db.DateTime, default=datetime.datetime.now(), nullable=False)

    #relationship
    user = db.relationship('User', back_populates='matchesFirst', foreign_keys=[userId])
    user2 = db.relationship('User', back_populates='matchesSecond', foreign_keys=[userId2])
    messages = db.relationship('Message', back_populates='match')

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'userId2': self.userId2,
            'createdAt': self.createdAt,
        }
