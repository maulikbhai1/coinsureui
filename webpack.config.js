/*eslint-disable */

var index = process.argv.indexOf('--env');
if (index != -1 &&  index + 1 < process.argv.length) {
  if (process.argv[index + 1] == 'production') {
      process.env.NODE_ENV = 'production';

  }

}

const NODE_ENV = process.env.NODE_ENV || 'development';

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const CompressionPlugin = require("compression-webpack-plugin");
const babelPolyfill = require("babel-polyfill");
const copyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

function addHash(template, hash) {
  return NODE_ENV == 'production' || NODE_ENV == 'staging' ?
      template.replace(/\.[^.]+$/, `.[${hash}]$&`) : `${template}?hash=[${hash}]`;
}

module.exports = {
  context: path.join(__dirname, '/src'),

  entry: {
    application: [
      'babel-polyfill',
      // 'webpack-dev-server/client?http://localhost:3000', // autoreload
      './javascripts/application.js'
    ]
  },

  output: {
    path: path.join(__dirname, '/build'),
    publicPath: '/',
    filename: addHash('[name].js', 'hash')
  },

  debug: true,
  devtool: "cheap-inline-module-source-map", //'source-map',

  watchOptions: {
    aggregateTimeout: 100,
    poll: 1000
  },

  // devtool: NODE_ENV == 'development' ? "cheap-inline-module-source-map" : null,

  resolve: {
    modulesDirectories: [
      path.join(__dirname, 'node_modules'),
      path.join(__dirname, '/src/javascripts/shared'),
    ],
    extensions: ['', '.js']
  },

  resolveLoader: {
    modulesDirectories: [path.join(__dirname, 'node_modules')],
    moduleTemplates: ['*-loader', '*'],
    extensions: ['', '.js']
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel?presets[]=es2015',
      exclude: /node_modules/
    }, {
      test: /\.less$/,
      loader: "style!css!autoprefixer!less"
    },{
      test: /\.css$/,
      loader: 'style!css!'
    }, {
      test: /\.html$/,
      loader: 'raw'
    },
      {
      test:   /\.(ico|png|jpg|svg|ttf|eot|woff|woff2|gif)$/,
      loader: addHash('file?name=[path][name].[ext]', 'hash:6')
    }
    ]
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "common"
    }),
    new ExtractTextPlugin(addHash('[name].css', 'contenthash'), { allChunks: true }),
    new HtmlWebpackPlugin({
      filename: './index.html',
      title: 'Coopex',
      template: 'src/index.html',
      inject: 'head',
      chunks: ['common', 'application']
    }),
    new webpack.WatchIgnorePlugin([
      path.join(__dirname, 'node_modules')
    ]),
    new webpack.HotModuleReplacementPlugin(),
    new copyWebpackPlugin([
      { from: 'assets', to: 'assets' },
      { from: 'favicon.ico', to: 'favicon.ico' }
    ]),
      new ImageminPlugin({
          test: /\.(jpe?g|png|gif|svg)$/i ,
          disable: process.env.NODE_ENV !== 'production', // Disable during development
          pngquant: {
              quality: '95-100'
          }}),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new webpack.ProvidePlugin({
      'window.jQuery': 'jquery',
      'windows.&': 'jquery'
    })
  ],

  devServer: {
    port: 3000,
    historyApiFallback: true,
    contentBase: 'public',
    disableHostCheck: true,
    stats: { chunks: false }
  }
};

if (NODE_ENV == 'production' || NODE_ENV == 'staging') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true,
        dead_code: true
      },
      output: {
        ascii_only: true
      }
    })
  );

  module.exports.plugins.push(
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  );
}