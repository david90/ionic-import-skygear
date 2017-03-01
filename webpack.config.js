module.exports = {
  entry: './www/js/index.js',
  output: {
    filename: './www/js/bundle.js'
  },
  externals: {
    'react-native': 'undefined',
    'websocket': 'undefined'
    }
};
