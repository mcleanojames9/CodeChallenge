from dataclasses import dataclass
from .database import db
from sqlalchemy.orm import Mapped, mapped_column

@dataclass
class AppUser(db.Model):
	def __init__(self,username,password):
		self.username = username
		self.password = password
	user_id: int
	username: str
	password: str
	__tablename__ = 'app_user'
	user_id = db.Column(db.Integer, primary_key=True)
	username = db.Column(db.String(35))
	password = db.Column(db.String(35))

# class AppUser(db.Model):
# 	user_id: Mapped[int] = mapped_column(db.Integer, primary_key=True)
# 	username: Mapped[str] = mapped_column(db.String, unique=True, nullable=False)
# 	password: Mapped[str] = mapped_column(db.String)

