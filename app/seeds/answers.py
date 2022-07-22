from app.models import db, Answer


# Adds a demo user, you can add other users here if you want
def seed_answers():

    ash_answer1 = Answer(content='0', userId= 1, questionId= 1)

    db.session.add(ash_answer1)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_answers():
    db.session.execute('TRUNCATE answers RESTART IDENTITY CASCADE;')
    db.session.commit()
