from app.models import db, Answer


# Adds a demo user, you can add other users here if you want
def seed_answers():

    ash_answer1 = Answer(content='0', userId= 1, questionId= 1)
    ash_answer2 = Answer(content='1', userId= 1, questionId= 2)
    ash_answer3 = Answer(content='2', userId= 1, questionId= 3)
    ash_answer4 = Answer(content='3', userId= 1, questionId= 4)
    ash_answer5 = Answer(content='0', userId= 1, questionId= 5)
    ash_answer6 = Answer(content='1', userId= 1, questionId= 6)
    ash_answer7 = Answer(content='2', userId= 1, questionId= 7)
    ash_answer8 = Answer(content='3', userId= 1, questionId= 8)
    ash_answer9 = Answer(content='0', userId= 1, questionId= 9)
    ash_answer10 = Answer(content='1', userId= 1, questionId= 10)
    ash_answer11 = Answer(content='2', userId= 1, questionId= 11)
    ash_answer12 = Answer(content='3', userId= 1, questionId= 12)
    ash_answer13 = Answer(content='0', userId= 1, questionId= 13)
    ash_answer14 = Answer(content='1', userId= 1, questionId= 14)
    ash_answer15 = Answer(content='2', userId= 1, questionId= 15)
    ash_answer16 = Answer(content='3', userId= 1, questionId= 16)
    ash_answer17 = Answer(content='0', userId= 1, questionId= 17)
    ash_answer18 = Answer(content='1', userId= 1, questionId= 18)
    ash_answer19 = Answer(content='2', userId= 1, questionId= 19)
    ash_answer20 = Answer(content='3', userId= 1, questionId= 20)

    brock_answer1 = Answer(content='0', userId= 2, questionId= 1)
    brock_answer2 = Answer(content='3', userId= 2, questionId= 2)
    brock_answer3 = Answer(content='1', userId= 2, questionId= 3)
    brock_answer4 = Answer(content='0', userId= 2, questionId= 4)
    brock_answer5 = Answer(content='2', userId= 2, questionId= 5)
    brock_answer6 = Answer(content='2', userId= 2, questionId= 6)
    brock_answer7 = Answer(content='3', userId= 2, questionId= 7)
    brock_answer8 = Answer(content='3', userId= 2, questionId= 8)
    brock_answer9 = Answer(content='0', userId= 2, questionId= 9)
    brock_answer10 = Answer(content='1', userId= 2, questionId= 10)
    brock_answer11 = Answer(content='2', userId= 2, questionId= 11)
    brock_answer12 = Answer(content='3', userId= 2, questionId= 12)
    brock_answer13 = Answer(content='1', userId= 2, questionId= 13)
    brock_answer14 = Answer(content='3', userId= 2, questionId= 14)
    brock_answer15 = Answer(content='3', userId= 2, questionId= 15)
    brock_answer16 = Answer(content='3', userId= 2, questionId= 16)
    brock_answer17 = Answer(content='0', userId= 2, questionId= 17)
    brock_answer18 = Answer(content='2', userId= 2, questionId= 18)
    brock_answer19 = Answer(content='1', userId= 2, questionId= 19)
    brock_answer20 = Answer(content='3', userId= 2, questionId= 20)

    misty_answer1 = Answer(content='0', userId= 1, questionId= 1)
    misty_answer2 = Answer(content='3', userId= 1, questionId= 2)
    misty_answer3 = Answer(content='1', userId= 1, questionId= 3)
    misty_answer4 = Answer(content='0', userId= 1, questionId= 4)
    misty_answer5 = Answer(content='2', userId= 1, questionId= 5)
    misty_answer6 = Answer(content='2', userId= 1, questionId= 6)
    misty_answer7 = Answer(content='3', userId= 1, questionId= 7)
    misty_answer8 = Answer(content='3', userId= 1, questionId= 8)
    misty_answer9 = Answer(content='0', userId= 1, questionId= 9)
    misty_answer10 = Answer(content='1', userId= 1, questionId= 10)
    misty_answer11 = Answer(content='2', userId= 1, questionId= 11)
    misty_answer12 = Answer(content='3', userId= 1, questionId= 12)
    misty_answer13 = Answer(content='1', userId= 1, questionId= 13)
    misty_answer14 = Answer(content='3', userId= 1, questionId= 14)
    misty_answer15 = Answer(content='3', userId= 1, questionId= 15)
    misty_answer16 = Answer(content='3', userId= 1, questionId= 16)
    misty_answer17 = Answer(content='0', userId= 1, questionId= 17)
    misty_answer18 = Answer(content='2', userId= 1, questionId= 18)
    misty_answer19 = Answer(content='1', userId= 1, questionId= 19)
    misty_answer20 = Answer(content='3', userId= 1, questionId= 20)


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
