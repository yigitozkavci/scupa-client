var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  // Gives you sourcemaps without slowing down rebundling
  devtool: 'eval-source-map',
  entry: path.join(__dirname, 'src/index.tsx'),
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  output: {
    path: path.join(BUILD_DIR),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module : {
    loaders : [
      {
        test : /\.js?/,
        loader : 'babel'
      },
      {
        test: /\.scss$/,
        loaders: ["sass-loader"]
      },
      {
        test: /\.css?$/,
        loader: 'style!css'
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
    ]
  },
  preLoaders: [
    { test: /\.js$/, loader: "source-map-loader" }
  ],
  devServer: {
    contentBase: 'public',
    devtool: 'eval',
    historyApiFallback: true,
    inline: true,
  },
};

module.exports = config;
