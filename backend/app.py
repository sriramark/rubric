from flask import Flask, jsonify

app = Flask(__name__)

MOVIES = [
    {"id": "123", "title": "Top Gun: Maverick"},
    {"id": "456", "title": "Sonic the Hedgehog"},
    {"id": "789", "title": "A Quiet Place"},
]


@app.route('/movies', methods=['GET'])
def get_movies():
    return jsonify({"movies": MOVIES})


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
