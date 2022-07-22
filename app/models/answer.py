from .db import db




class Answer(db.Model):
    __tablename__ = 'answers'

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(100))
    questionId = db.Column(db.Integer, nullable = False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    #relationship
    user = db.relationship('User', back_populates='answers')


    def to_dict(self):
        return {
            'id': self.id,
            'content': self.content,
            'questionId': self.questionId,
            'userId': self.userId,
        }
