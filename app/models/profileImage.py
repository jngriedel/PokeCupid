from .db import db

import datetime


class ProfileImage(db.Model):
    __tablename__ = 'profileimages'

    id = db.Column(db.Integer, primary_key=True)
    imgUrl = db.Column(db.String(255), default='https://p.kindpng.com/picc/s/74-743336_global-link-question-question-mark-unknown-pokemon-hd.png')
    title = db.Column(db.String(50))
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    #relationship
    user = db.relationship('User', back_populates='profileImages')


    def to_dict(self):
        return {
            'id': self.id,
            'imgUrl': self.imgUrl,
            'title': self.title,
            'userId': self.userId,
        }
