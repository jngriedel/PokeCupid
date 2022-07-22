from app.models import db, ProfileImage


# Adds a demo user, you can add other users here if you want
def seed_profile_images():

    ash_profile = ProfileImage(imgUrl='https://cdn.flickeringmyth.com/wp-content/uploads/2017/10/Pokemon-I-Choose-You-1.png', title= "Me and my Pokémon, Pikachu!", userId= 1)
    brock_profile = ProfileImage(imgUrl='https://i.pinimg.com/originals/d3/85/4a/d3854a8753686e700b0cd5e49845434b.jpg', title= "My Onyx and I.", userId= 2)
    misty_profile = ProfileImage(imgUrl='https://archives.bulbagarden.net/media/upload/thumb/f/fb/Misty_SM.png/150px-Misty_SM.png', title= "Hey! I'm Misty, the water Pokémon trainer!", userId= 3)
    officer_jenny_profile = ProfileImage(imgUrl='https://static.wikia.nocookie.net/p__/images/6/62/OfficerJenny-DP43.png/revision/latest?cb=20120508205802&path-prefix=protagonist', title= "Make sure you're following the laws!", userId= 4)
    nurse_joy_profile = ProfileImage(imgUrl='https://assets.mycast.io/actor_images/actor-nurse-joy-210511_large.jpg?1620318396', title= "Just enjoying a stroll in the park.", userId= 5)
    surge_profile = ProfileImage(imgUrl='https://static.wikia.nocookie.net/pokemon/images/2/2f/Lt._Surge_anime.png/revision/latest?cb=20160116202511', title= "Electrifying!", userId= 6)

    db.session.add(ash_profile)
    db.session.add(brock_profile)
    db.session.add(misty_profile)
    db.session.add(officer_jenny_profile)
    db.session.add(nurse_joy_profile)
    db.session.add(surge_profile)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_profile_images():
    db.session.execute('TRUNCATE profileImages RESTART IDENTITY CASCADE;')
    db.session.commit()
