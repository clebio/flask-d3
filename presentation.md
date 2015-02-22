# Asynchronous Flask with D3.js

## A Brief Introduction

#### Caleb Hyde

[@Hedonistica](https://twitter.com/Hedonistica)


## Context

This will be intentionally *very simple*. I wanted the most concise
example of asynchronous client-server IO possible. Web stacks are complex!


### [Flask](http://flask.pocoo.org/)

Flask is a web framework. It's

- modular (and there are a lot of modules)
- written in Python
- exceedingly well documented

Flask **is not**

- A *webserver*
- Django


### [D3.js](http://d3js.org/)

D3.js is a way of thinking about data, and about (re)presenting
data.

D3 takes some getting used to. It helps if you know Javascript.


## Step 1: Flask routes

- Routes are decorators
- Routes are identified by their *method name*, not the decorator path


### Jinja templates

Flask uses [Jinja](http://jinja.pocoo.org/) for page templating.

- Templates let you reuse page components
- You're still writing HMTL
- There are higher-level abstractions
  (e.g. [pluggable views](http://flask.pocoo.org/docs/0.10/views/))


### D3 and Javascript

D3 relies heavily on
[SVG](http://en.wikipedia.org/wiki/Scalable_Vector_Graphics) for
visualization. SVG is *not HTML*, which sucks. But D3 is a lot [more
than just its visualizations](http://ruoyusun.com/2014/05/26/what-d3js-is-not.html).

You can use
[D3 without SVG](http://vallandingham.me/d3_without_svg.html), but if
you're not sure, then you don't need to.

Notes: Not SVG means we're writing {Python, Javascript, HTML, CSS,
SVG}. Web stacks are complex!


## Step 2: Javascript Timing

Notes:
`git checkout step2` and show the Bostock example.


### Making something happen

We're scrambling letters periodically. We use Javascript's
[timing](http://www.w3schools.com/js/js_timing.asp) methods. This is
just *something* to do.

Notes: Show the browser console (client-side updating), and the Flask
status (server-side updating).


### What's missing?

The updates are purely client-side. The server doesn't provide new information.

It's *all Javascript*.

Notes:
What *hasn't changed* is `app.py` and `index.html`.


## Step 3: Server-side data


### The source of things

The client-side Javascript now calls the server for data. We've added
*a new route* and updated the Javascript `setInterval` method to call
that route.

Notes: Show the Flask console and the raw output of the _get_letters
route (http://localhost:8000/_get_letters).


### Request context

Flask parses request params nicely -- `request.args.get('dataset')` --
Javascript knows how to pack and unpack arguments as well.

This is *a good thing*. We're not constructing URL paths and then
spliting and parsing them manually.

Notes:
Edit the setInterval anonymous function to change the response
parameter name. The Python simple-http-server updates on-the-fly.


## Fin

This was intentionally *very simple*. I wanted the most concise
example of asynchronous client-server IO possible. Plus, D3 is neat.


## References and Requests

This is what we used:

- [Flask](http://flask.pocoo.org/docs/0.10/)
- [d3](http://d3js.org/)
- This presentation was built with [Reveal JS](http://lab.hakim.se/reveal-js/#/)

I encourage you to present, too!

[PyKC Requested Topics](http://www.meetup.com/pythonkc/messages/boards/thread/44089002)


[flask]: http://flask.pocoo.org/
[flask_docs]:  http://flask.pocoo.org/docs/0.10/
[d3]: http://d3js.org/

[vega]: http://trifacta.github.io/vega/
[bokeh]: http://bokeh.pydata.org/en/latest/

[revealjs]: http://lab.hakim.se/reveal-js/#/
[pykc_requests]: http://www.meetup.com/pythonkc/messages/boards/thread/44089002
