# D3.js integration with Flask

## Virtualenv

This package has one dependency, `Flask`, so to use it, I recommend using `virtualenv`.

	virtualenv flask-d3
	. flask-d3/bin/activate
	python setup.py install

## App manager

The project creates a Flask app. The `app.py` file is the entry-point and is executable. To start it, run:

	./app.py