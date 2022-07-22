from .db import db




class Pokemon(db.Model):
    __tablename__ = 'pokemon'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    type = db.Column(db.String(50), nullable = False)
    imgUrl = db.Column(db.String(255), nullable=False)
    personality = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(2000), nullable=False)

    #relationship
    user = db.relationship('User', back_populates='pokemon')


    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'type': self.type,
            'imgUrl': self.imgUrl,
            'personality': self.personality,
            'description' : self.description
        }
