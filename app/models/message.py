from .db import db
import datetime


class Message(db.Model):
    __tablename__ = 'messages'

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(200), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    matchId = db.Column(db.Integer, db.ForeignKey('matches.id'), nullable=False)
    createdAt = db.Column(db.DateTime, default=datetime.datetime.now(), nullable=False )

    #relationship
    user = db.relationship('User', back_populates='messages')
    match = db.relationship('Match', back_populates='messages')


    def to_dict(self):
        return {
            'id': self.id,
            'content': self.content,
            'userId': self.userId,
            'matchId': self.matchId,
            'createdAt': self.createdAt
        }
