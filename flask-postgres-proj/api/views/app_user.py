from flask import Blueprint, jsonify, request
from api.models import AppUser
from api.database import db

bp = Blueprint('app_user', __name__, url_prefix='/app_user')

@bp.route('login', methods=('GET','POST'))
def login():
    app_users= AppUser.query.all()
    return jsonify(app_users)

@bp.route('register', methods=('GET','POST'))
def register():
    new_user= AppUser("first_user","hardCodedlikeSh1tTho")
    db.session.add(new_user)
    db.session.commit()

    return jsonify(new_user)