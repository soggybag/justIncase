const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'justincase.js',
    library: 'justincase',
    libraryTarget: 'umd'
  }
};