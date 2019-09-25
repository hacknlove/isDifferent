const path = require('path')

var config = {
  mode: process.env.MODE,
  entry: path.resolve(__dirname, 'src/index.js'),
  plugins: [],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'isDifferent.min.js',
    library: 'isDifferent',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'this'
  },
  optimization: {
    minimize: true
  }
}

if (config.mode !== 'production') {
  config.devtool = 'source-map'
}

module.exports = config
