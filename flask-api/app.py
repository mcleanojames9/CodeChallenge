from flask import Flask, request, jsonify, make_response
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = f"postgresql://postgres:near476@localhost:5432/postgres"
db= SQLAlchemy(app)

class User(db.Model):
    __tablename__ = 'app_user'

    user_id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)

    def json(self):
        return {'user_id': self.user_id,'username': self.username, 'password': self.password}

class Estimate(db.Model):
    __tablename__ = 'estimate'

    estimate_id = db.Column(db.Integer, primary_key=True)
    mat_cost= db.Column(db.Integer)
    lab_cost = db.Column(db.Integer)
    inc_cost = db.Column(db.Integer)
    tot_cost = db.Column(db.Integer)
    notes = db.Column(db.String(500))

    def json(self):
        return {'estimate_id': self.estimate_id,
                'mat_cost': self.mat_cost,
                'lab_cost': self.lab_cost,
                'inc_cost': self.inc_cost,
                'tot_cost': self.tot_cost,
                'notes': self.notes}

# db.create_all()

#create a test route
@app.route('/test', methods=['GET'])
def test():
  return make_response(jsonify({'message': 'test route'}), 200)


# create a user
@app.route('/app_user', methods=['PUT'])
def create_user():
  try:
    data = request.get_json()
    new_user = User(username=data['username'], email=data['email'])
    db.session.add(new_user)
    db.session.commit()
    return make_response(jsonify({'message': 'user created'}), 201)
  except Exception as e:
    return make_response(jsonify({'message': 'error creating user'}), 500)

@app.route('/estimate', methods=['POST'])
def save_estimate():
    try:
        data=request.get_json()
        print(data)
        estimate= Estimate(mat_cost=data['mat_cost'],lab_cost=data['lab_cost'],
                           inc_cost=data['inc_cost'],tot_cost=data['tot_cost'],
                           notes=data['notes'])
        db.session.add(estimate)
        db.session.commit()
        return make_response(jsonify({'message': 'estimate saved'}), 201)
    except Exception as e:
        return make_response(jsonify({'message': 'error creating estimate'}), 500)

# get a user
@app.route('/app_user', methods=['POST'])
def get_user():
  try:
    data = request.get_json()
    print(data)
    user = User.query.filter_by(username=data['username']).first()
    if user:
      return make_response(jsonify({'app_user': user.json()}), 200)
    return make_response(jsonify({'message': 'user not found'}), 404)
  except Exception as e:
    return make_response(jsonify({'message': 'error getting user'}), 500)

