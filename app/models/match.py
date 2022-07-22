from .db import db

import datetime


class Match(db.Model):
    __tablename__ = 'matches'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    userId2 = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    createdAt = db.Column(db.DateTime, default=datetime.datetime.now(), nullable=False)

    #relationship
    user = db.relationship('User', back_populates='matches')
    user2 = db.relationship('User', back_populates='matches')


    def to_dict(self):
        return {
            'id': self.id,
            'content': self.content,
            'questionId': self.questionId,
            'userId': self.userId,
        }
