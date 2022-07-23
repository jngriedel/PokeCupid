from app.models import db, Match


# Adds a demo user, you can add other users here if you want
def seed_matches():


    brock_match = Match(userId=2, userId2=1)
    misty_match = Match(userId=3, userId2=1 )
    officer_jenny_match = Match(userId=4, userId2=1)
    nurse_joy_match = Match(userId=5, userId2=1)
    surge_match = Match(userId=6, userId2=1)


    db.session.add(brock_match)
    db.session.add(misty_match)
    db.session.add(officer_jenny_match)
    db.session.add(nurse_joy_match)
    db.session.add(surge_match)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_matches():
    db.session.execute('TRUNCATE matches RESTART IDENTITY CASCADE;')
    db.session.commit()
