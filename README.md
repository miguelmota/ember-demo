# Ember Demo App

Example [Ember.js](http://emberjs.com/) application that displays stock information from the [Yahoo Finance API](http://finance.yahoo.com/).

# Demo

[http://ember-demo.moogs.io](http://ember-demo.moogs.io)

## Running

Start the web server. The reason for the web server is to fetch the data from Yahoo Finance due to the same origin policy restriction on browsers.

```bash
node server/app
```

Start the client application

```bash
cd client/

grunt serve
```

Navigate to `http://localhost:8242`

## Test

```
karma run
```

Note that there aren't many tests yet.

# License

Released under the MIT License.