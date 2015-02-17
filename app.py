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

    indices = range(len(data))
    random.shuffle(indices)
    for index in indices[:replace]:
        data[index] = alphabet[int(random.random() * 25)]
    return jsonify(result=''.join(data))


if __name__ == '__main__':
    app.run(
        host="0.0.0.0",
        port=int("8000"),
        debug=True
    )
