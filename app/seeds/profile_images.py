from app.models import db, ProfileImage


# Adds a demo user, you can add other users here if you want
def seed_profile_images():

    ash_profile = ProfileImage(imgUrl='https://cdn.flickeringmyth.com/wp-content/uploads/2017/10/Pokemon-I-Choose-You-1.png', title= "I want to be the very best! Me and my Pokémon, Pikachu!", userId= 1)
    brock_profile = ProfileImage(imgUrl='https://i.pinimg.com/originals/d3/85/4a/d3854a8753686e700b0cd5e49845434b.jpg', title= "My Onyx and I, looking our best for any lovely ladies. Please - email, number, anything!", userId= 2)
    misty_profile = ProfileImage(imgUrl='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6ca27b2e-633c-48aa-9791-f62d0a2f45d8/df0na1b-e5ed711b-f586-4521-abcb-af92aaea1e10.png/v1/fill/w_1280,h_1811,strp/misty__os__by_koopastop96_df0na1b-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZjYTI3YjJlLTYzM2MtNDhhYS05NzkxLWY2MmQwYTJmNDVkOFwvZGYwbmExYi1lNWVkNzExYi1mNTg2LTQ1MjEtYWJjYi1hZjkyYWFlYTFlMTAucG5nIiwiaGVpZ2h0IjoiPD0xODExIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvNmNhMjdiMmUtNjMzYy00OGFhLTk3OTEtZjYyZDBhMmY0NWQ4XC9rb29wYXN0b3A5Ni00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.Z6ds9JbV10YazWMKDn0jScZ_6lsiBGAluObxvzbonpQ', title= "Hey! I'm Misty, the water Pokémon trainer!", userId= 3)
    officer_jenny_profile = ProfileImage(imgUrl='https://static.wikia.nocookie.net/p__/images/6/62/OfficerJenny-DP43.png/revision/latest?cb=20120508205802&path-prefix=protagonist', title= "It is my duty to protect and serve, make sure you're following the laws!", userId= 4)
    nurse_joy_profile = ProfileImage(imgUrl='https://assets.mycast.io/actor_images/actor-nurse-joy-210511_large.jpg?1620318396', title= "Just enjoying a stroll in the park - I love caring for Pokémon!", userId= 5)
    surge_profile = ProfileImage(imgUrl='https://static.wikia.nocookie.net/pokemon/images/2/2f/Lt._Surge_anime.png/revision/latest?cb=20160116202511', title= "I hope our first date is electrifying!", userId= 6)

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
