from dataclasses import dataclass
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
import psycopg2


app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = f"postgresql://postgres:near476@localhost:5432/postgres"
db= SQLAlchemy(app)
@dataclass
class AppUser(db.Model):
	user_id: int
	username: str
	password: str
	__tablename__ = 'app_user'
	user_id = db.Column(db.Integer, primary_key=True)
	username = db.Column(db.String(35))
	password = db.Column(db.String(35))

@app.route('/login', methods= ['GET','POST'])
def login():
	print(request.get_json())
	app_users= AppUser.query.all()
	return jsonify(app_users)

@app.route('/test')
# ‘/’ URL is bound with hello_world() function.
def hello_world():
	return jsonify({'message':'Python Flask Server is open and ready for business!'})

from app import routes
app.register_blueprint(routes.bp)

# main driver function
if __name__ == '__main__':
	app.run()
