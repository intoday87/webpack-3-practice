require('babel-register');
var config = require('./build.config');
var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

config.plugins.push(
  new UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
);

module.exports = config;
