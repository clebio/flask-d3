#!/usr/bin/env python
from flask import Flask, render_template, request, jsonify

import string
import random

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/_get_letters')
def letter_replace():
    alphabet = string.ascii_lowercase
    data = list(request.args.get('dataset', alphabet,type=str))
    replace = request.args.get('replace', 3, type=int)

    for i in range(replace):
        index = random.randint(1, len(data)) - 1
        letter = alphabet[int(random.random() * 25)]
        data[index] = letter
    return jsonify(result=''.join(data))




if __name__ == '__main__':
    app.run(
        host="0.0.0.0",
        port=int("8000"),
        debug=True
    )
