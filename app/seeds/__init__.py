from flask.cli import AppGroup
from .users import seed_users, undo_users
from .answers import seed_answers, undo_answers
from .profile_images import seed_profile_images, undo_profile_images
from .pokemon import seed_pokemon, undo_pokemon

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_pokemon()
    seed_users()
    seed_answers()
    seed_profile_images()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_pokemon()
    undo_users()
    undo_answers()
    undo_profile_images()
    # Add other undo functions here
