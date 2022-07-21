from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        name='Ash', email='demo@aa.io', password='password', gender='Male' , bio= 'I wanna be the very best, like no one ever was.', pokemonId=25)
    Brock = User(
        name='Brock', email='brock@aa.io', password='password', gender='Male' , bio= 'Looking for the Nurse Joy to my Brock', pokemonId=95)
    Misty = User(
        name='Misty', email='misty@aa.io', password='password', gender='Female' , bio= 'No bug pokemon or I swear I will scream', pokemonId=120)

    Officer_Jenny = User(
        name='Jenny', email='jenny@aa.io', password='password', gender='Female' , bio= 'Law enforcement and avid Bike rider', pokemonId=59)

    Nurse_Joy = User(
        name='Joy', email='joy@aa.io', password='password', gender='Female' , bio= 'I heal and care for sick pokemon. Tired of thirsty Gym Leaders blowing up my DMs. Please just act normal.', pokemonId=113)

    Surge = User(
        name='Surge', email='surge@aa.io', password='password', gender='Male' , bio= 'Meet up with me. I seem intimidating but I may shock you in a good way.', pokemonId=26)

    db.session.add(demo)
    db.session.add(Brock)
    db.session.add(Misty)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
