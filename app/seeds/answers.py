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

    misty_answer1 = Answer(content='0', userId= 3, questionId= 1)
    misty_answer2 = Answer(content='3', userId= 3, questionId= 2)
    misty_answer3 = Answer(content='1', userId= 3, questionId= 3)
    misty_answer4 = Answer(content='0', userId= 3, questionId= 4)
    misty_answer5 = Answer(content='2', userId= 3, questionId= 5)
    misty_answer6 = Answer(content='2', userId= 3, questionId= 6)
    misty_answer7 = Answer(content='3', userId= 3, questionId= 7)
    misty_answer8 = Answer(content='3', userId= 3, questionId= 8)
    misty_answer9 = Answer(content='0', userId= 3, questionId= 9)
    misty_answer10 = Answer(content='1', userId= 3, questionId= 10)
    misty_answer11 = Answer(content='2', userId= 3, questionId= 11)
    misty_answer12 = Answer(content='3', userId= 3, questionId= 12)
    misty_answer13 = Answer(content='1', userId= 3, questionId= 13)
    misty_answer14 = Answer(content='3', userId= 3, questionId= 14)
    misty_answer15 = Answer(content='3', userId= 3, questionId= 15)
    misty_answer16 = Answer(content='3', userId= 3, questionId= 16)
    misty_answer17 = Answer(content='0', userId= 3, questionId= 17)
    misty_answer18 = Answer(content='2', userId= 3, questionId= 18)
    misty_answer19 = Answer(content='1', userId= 3, questionId= 19)
    misty_answer20 = Answer(content='3', userId= 3, questionId= 20)

    officer_jenny_answer1 = Answer(content='3', userId= 4, questionId= 1)
    officer_jenny_answer2 = Answer(content='2', userId= 4, questionId= 2)
    officer_jenny_answer3 = Answer(content='0', userId= 4, questionId= 3)
    officer_jenny_answer4 = Answer(content='0', userId= 4, questionId= 4)
    officer_jenny_answer5 = Answer(content='1', userId= 4, questionId= 5)
    officer_jenny_answer6 = Answer(content='2', userId= 4, questionId= 6)
    officer_jenny_answer7 = Answer(content='2', userId= 4, questionId= 7)
    officer_jenny_answer8 = Answer(content='0', userId= 4, questionId= 8)
    officer_jenny_answer9 = Answer(content='1', userId= 4, questionId= 9)
    officer_jenny_answer10 = Answer(content='2', userId= 4, questionId= 10)
    officer_jenny_answer11 = Answer(content='2', userId= 4, questionId= 11)
    officer_jenny_answer12 = Answer(content='2', userId= 4, questionId= 12)
    officer_jenny_answer13 = Answer(content='1', userId= 4, questionId= 13)
    officer_jenny_answer14 = Answer(content='3', userId= 4, questionId= 14)
    officer_jenny_answer15 = Answer(content='2', userId= 4, questionId= 15)
    officer_jenny_answer16 = Answer(content='0', userId= 4, questionId= 16)
    officer_jenny_answer17 = Answer(content='2', userId= 4, questionId= 17)
    officer_jenny_answer18 = Answer(content='0', userId= 4, questionId= 18)
    officer_jenny_answer19 = Answer(content='2', userId= 4, questionId= 19)
    officer_jenny_answer20 = Answer(content='1', userId= 4, questionId= 20)

    nurse_joy_answer1 = Answer(content='0', userId= 5, questionId= 1)
    nurse_joy_answer2 = Answer(content='2', userId= 5, questionId= 2)
    nurse_joy_answer3 = Answer(content='0', userId= 5, questionId= 3)
    nurse_joy_answer4 = Answer(content='0', userId= 5, questionId= 4)
    nurse_joy_answer5 = Answer(content='1', userId= 5, questionId= 5)
    nurse_joy_answer6 = Answer(content='3', userId= 5, questionId= 6)
    nurse_joy_answer7 = Answer(content='2', userId= 5, questionId= 7)
    nurse_joy_answer8 = Answer(content='0', userId= 5, questionId= 8)
    nurse_joy_answer9 = Answer(content='1', userId= 5, questionId= 9)
    nurse_joy_answer10 = Answer(content='0', userId= 5, questionId= 10)
    nurse_joy_answer11 = Answer(content='2', userId= 5, questionId= 11)
    nurse_joy_answer12 = Answer(content='0', userId= 5, questionId= 12)
    nurse_joy_answer13 = Answer(content='1', userId= 5, questionId= 13)
    nurse_joy_answer14 = Answer(content='3', userId= 5, questionId= 14)
    nurse_joy_answer15 = Answer(content='1', userId= 5, questionId= 15)
    nurse_joy_answer16 = Answer(content='0', userId= 5, questionId= 16)
    nurse_joy_answer17 = Answer(content='0', userId= 5, questionId= 17)
    nurse_joy_answer18 = Answer(content='0', userId= 5, questionId= 18)
    nurse_joy_answer19 = Answer(content='2', userId= 5, questionId= 19)
    nurse_joy_answer20 = Answer(content='0', userId= 5, questionId= 20)

    surge_answer1 = Answer(content='3', userId= 6, questionId= 1)
    surge_answer2 = Answer(content='2', userId= 6, questionId= 2)
    surge_answer3 = Answer(content='1', userId= 6, questionId= 3)
    surge_answer4 = Answer(content='0', userId= 6, questionId= 4)
    surge_answer5 = Answer(content='1', userId= 6, questionId= 5)
    surge_answer6 = Answer(content='1', userId= 6, questionId= 6)
    surge_answer7 = Answer(content='2', userId= 6, questionId= 7)
    surge_answer8 = Answer(content='1', userId= 6, questionId= 8)
    surge_answer9 = Answer(content='1', userId= 6, questionId= 9)
    surge_answer10 = Answer(content='2', userId= 6, questionId= 10)
    surge_answer11 = Answer(content='2', userId= 6, questionId= 11)
    surge_answer12 = Answer(content='1', userId= 6, questionId= 12)
    surge_answer13 = Answer(content='1', userId= 6, questionId= 13)
    surge_answer14 = Answer(content='3', userId= 6, questionId= 14)
    surge_answer15 = Answer(content='1', userId= 6, questionId= 15)
    surge_answer16 = Answer(content='3', userId= 6, questionId= 16)
    surge_answer17 = Answer(content='0', userId= 6, questionId= 17)
    surge_answer18 = Answer(content='1', userId= 6, questionId= 18)
    surge_answer19 = Answer(content='2', userId= 6, questionId= 19)
    surge_answer20 = Answer(content='1', userId= 6, questionId= 20)
    
    
    db.session.add(officer_jenny_answer1)
    db.session.add(officer_jenny_answer2)
    db.session.add(officer_jenny_answer3)
    db.session.add(officer_jenny_answer4)
    db.session.add(officer_jenny_answer5)
    db.session.add(officer_jenny_answer6)
    db.session.add(officer_jenny_answer7)
    db.session.add(officer_jenny_answer8)
    db.session.add(officer_jenny_answer9)
    db.session.add(officer_jenny_answer10)
    db.session.add(officer_jenny_answer11)
    db.session.add(officer_jenny_answer12)
    db.session.add(officer_jenny_answer13)
    db.session.add(officer_jenny_answer14)
    db.session.add(officer_jenny_answer15)
    db.session.add(officer_jenny_answer16)
    db.session.add(officer_jenny_answer17)
    db.session.add(officer_jenny_answer18)
    db.session.add(officer_jenny_answer19)
    db.session.add(officer_jenny_answer20)
    db.session.add(nurse_joy_answer1)
    db.session.add(nurse_joy_answer2)
    db.session.add(nurse_joy_answer3)
    db.session.add(nurse_joy_answer4)
    db.session.add(nurse_joy_answer5)
    db.session.add(nurse_joy_answer6)
    db.session.add(nurse_joy_answer7)
    db.session.add(nurse_joy_answer8)
    db.session.add(nurse_joy_answer9)
    db.session.add(nurse_joy_answer10)
    db.session.add(nurse_joy_answer11)
    db.session.add(nurse_joy_answer12)
    db.session.add(nurse_joy_answer13)
    db.session.add(nurse_joy_answer14)
    db.session.add(nurse_joy_answer15)
    db.session.add(nurse_joy_answer16)
    db.session.add(nurse_joy_answer17)
    db.session.add(nurse_joy_answer18)
    db.session.add(nurse_joy_answer19)
    db.session.add(nurse_joy_answer20)
    db.session.add(surge_answer1)
    db.session.add(surge_answer2)
    db.session.add(surge_answer3)
    db.session.add(surge_answer4)
    db.session.add(surge_answer5)
    db.session.add(surge_answer6)
    db.session.add(surge_answer7)
    db.session.add(surge_answer8)
    db.session.add(surge_answer9)
    db.session.add(surge_answer10)
    db.session.add(surge_answer11)
    db.session.add(surge_answer12)
    db.session.add(surge_answer13)
    db.session.add(surge_answer14)
    db.session.add(surge_answer15)
    db.session.add(surge_answer16)
    db.session.add(surge_answer17)
    db.session.add(surge_answer18)
    db.session.add(surge_answer19)
    db.session.add(surge_answer20)
    db.session.add(ash_answer1)
    db.session.add(ash_answer2)
    db.session.add(ash_answer3)
    db.session.add(ash_answer4)
    db.session.add(ash_answer5)
    db.session.add(ash_answer6)
    db.session.add(ash_answer7)
    db.session.add(ash_answer8)
    db.session.add(ash_answer9)
    db.session.add(ash_answer10)
    db.session.add(ash_answer11)
    db.session.add(ash_answer12)
    db.session.add(ash_answer13)
    db.session.add(ash_answer14)
    db.session.add(ash_answer15)
    db.session.add(ash_answer16)
    db.session.add(ash_answer17)
    db.session.add(ash_answer18)
    db.session.add(ash_answer19)
    db.session.add(ash_answer20)
    db.session.add(brock_answer1)
    db.session.add(brock_answer2)
    db.session.add(brock_answer3)
    db.session.add(brock_answer4)
    db.session.add(brock_answer5)
    db.session.add(brock_answer6)
    db.session.add(brock_answer7)
    db.session.add(brock_answer8)
    db.session.add(brock_answer9)
    db.session.add(brock_answer10)
    db.session.add(brock_answer11)
    db.session.add(brock_answer12)
    db.session.add(brock_answer13)
    db.session.add(brock_answer14)
    db.session.add(brock_answer15)
    db.session.add(brock_answer16)
    db.session.add(brock_answer17)
    db.session.add(brock_answer18)
    db.session.add(brock_answer19)
    db.session.add(brock_answer20)
    db.session.add(misty_answer1)
    db.session.add(misty_answer2)
    db.session.add(misty_answer3)
    db.session.add(misty_answer4)
    db.session.add(misty_answer5)
    db.session.add(misty_answer6)
    db.session.add(misty_answer7)
    db.session.add(misty_answer8)
    db.session.add(misty_answer9)
    db.session.add(misty_answer10)
    db.session.add(misty_answer11)
    db.session.add(misty_answer12)
    db.session.add(misty_answer13)
    db.session.add(misty_answer14)
    db.session.add(misty_answer15)
    db.session.add(misty_answer16)
    db.session.add(misty_answer17)
    db.session.add(misty_answer18)
    db.session.add(misty_answer19)
    db.session.add(misty_answer20)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_answers():
    db.session.execute('TRUNCATE answers RESTART IDENTITY CASCADE;')
    db.session.commit()
