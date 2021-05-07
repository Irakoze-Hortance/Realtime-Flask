from .db import db


class Card(db.Document):
    card_id = db.StringField(required=True, unique=True)
    uu_id = db.IntField(required=True)
    amount = db.IntField(required=True)
