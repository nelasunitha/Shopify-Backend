module.exports = {
  mode: 'development',
  entry: ['babel-polyfill', './app/main'],
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: [],
        },
      },
    ],
  },
};
