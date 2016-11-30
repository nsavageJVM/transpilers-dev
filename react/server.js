var express = require('express')
var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.dev.config');
var tickets = require('./tickets');

var app = express()
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/api/ticket/:id?', (req, res) => {
  const id = req.params.id
  if (!id) {
    res.json(tickets)
  } else {
    const ticket = tickets.find(p => p.id == id);
    if (ticket)
      res.json(ticket)
    else
      res.status(404).send('Not Found')
  }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, function() {
  console.log('Express running at localhost: ' + PORT)
})
