const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');



module.exports = {
  devtool: 'source-map',
  entry:  [
    "webpack-dev-server/client?http://localhost:9090",
    "webpack/hot/only-dev-server",
    "./src/index"
  ],

  // This will not actually create a bundle.js file in ./client. It is used
  // by the dev server for dynamic hot loading.
  output: {
    path: __dirname + "/client/",
    filename: "app.js",
    publicPath: "http://localhost:9090/client/"
  },
  // entry:'./src/main.jsx',
  // output: {
  //   path: './client',
  //   filename: 'bundle.js'
  // },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot','babel-loader'],
      exclude: /node_modules/
    },{
       test:/\.css$/,
      loader:"style!css"
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new ExtractTextPlugin('style.css', { allChunks: true })
    new webpack.NoErrorsPlugin()
  ],
}