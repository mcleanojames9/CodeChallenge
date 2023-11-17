import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy


# The application factory
def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
        SQLALCHEMY_DATABASE_URI = 'postgresql://postgres:near476@localhost:5432/postgres'
    )

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    #initialize databse
    from .database import db
    db.init_app(app)

    #import/register functions from relative files
    from .views import app_user
    app.register_blueprint(app_user.bp)


    return app