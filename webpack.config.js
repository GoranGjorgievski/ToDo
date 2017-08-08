module.exports = {
  entry: `${ __dirname }/src/index.js`,
  output: {
    path: `${ __dirname }/build`,
    filename: 'app.js',
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        use: ['style-loader', 'css-loader', 'sass-loader'],
        test: /\.scss$/,
      },
    ],
  },
  devServer: {
    port: 3000,
    contentBase: `${ __dirname }/build`,
    inline: true,
  },
};
