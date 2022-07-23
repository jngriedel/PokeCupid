from app.models import db, Match


# Adds a demo user, you can add other users here if you want
def seed_matches():

    ash_match = Match(userId=1)
    brock_match = Match()
    misty_match = Match(userId=3, )
    officer_jenny_match = Match()
    nurse_joy_match = Match()
    surge_match = Match()

    db.session.add(ash_match)
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
