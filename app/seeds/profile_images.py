from app.models import db, ProfileImage


# Adds a demo user, you can add other users here if you want
def seed_profile_images():

    ash_profile = ProfileImage(imgUrl='https://cdn.flickeringmyth.com/wp-content/uploads/2017/10/Pokemon-I-Choose-You-1.png', title= "Me and my Pokémon, Pikachu!", userId= 1)
    brock_profile = ProfileImage(imgUrl='https://goat.com.au/wp-content/uploads/2019/11/Pokemon-Brock-2-HERO.png', title= "My Onyx and I.", userId= 2)
    misty_profile = ProfileImage(imgUrl='https://i.pinimg.com/originals/8e/2d/c6/8e2dc678fe2dc42a0865bdf4ceced42b.png', title= "Hey! I'm Misty, the water Pokémon trainer!", userId= 3)
    officer_jenny_profile = ProfileImage(imgUrl='https://pokemonrevolution.net/forum/uploads/monthly_2019_07/Ez8tnek1_400x400.jpg.18ea173693e995dbaa0cf506842226e5.jpg', title= "Make sure you're following the laws!", userId= 4)
    nurse_joy_profile = ProfileImage(imgUrl='https://assets.mycast.io/actor_images/actor-nurse-joy-210511_large.jpg?1620318396', title= "Just enjoying a stroll in the park.", userId= 5)
    surge_profile = ProfileImage(imgUrl='https://static.fandomspot.com/images/12/11046/06-lt-surge-pokemon-anime.jpg', title= "Electrifying!", userId= 6)

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
