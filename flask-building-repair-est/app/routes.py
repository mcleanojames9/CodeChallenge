from flask import Blueprint

bp = Blueprint('testbp',__name__, url_prefix='/testbp')

@bp.route('/hello', methods=('GET'))
def testHello():
    return "hello world blueprint"