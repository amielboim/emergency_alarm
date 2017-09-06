
const path = require('path');

module.exports = {
  entry: ['./public/javascripts/angular.min.js','./public/javascripts/scripts.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
