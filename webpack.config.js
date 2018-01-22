const {
  resolve
} = require('path')

module.exports = {
  entry: './client/index.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  context: __dirname,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
        test: /jsx?$/,
        include: resolve(__dirname, './app'),
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env'],
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
};
