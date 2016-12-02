var express = require('express')
var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.dev.config');

var app = express()
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));


const PORT = process.env.PORT || 3000
app.listen(PORT, function() {
  console.log('Express running at localhost: ' + PORT)
})
