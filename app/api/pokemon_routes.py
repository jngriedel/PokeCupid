from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Pokemon, db



pokemon_routes = Blueprint('pokemon', __name__)



@pokemon_routes.route('')
def allMons():
    allPokemon = Pokemon.query.all()

    return {'pokemon': [mon.to_dict() for mon in allPokemon]}
