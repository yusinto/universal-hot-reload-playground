const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const CleanWebpackPlugin = require('clean-webpack-plugin');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function (x) {
      return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function (mod) {
      nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
    devtool: 'source-map',
    entry: ['./src/server/server.js'],
    target: 'node',
    node: {
        __dirname: false,
        __filename: false
    },
    output: {
        path: path.resolve(__dirname, 'dist', 'server'),
        filename: 'index.js',
        libraryTarget: 'commonjs2' // Important
    },
    externals: nodeModules,
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|dist)/,
                include: path.resolve('src', 'server'),
                loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015', 'stage-0']
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new CleanWebpackPlugin([path.resolve(__dirname, 'dist')], {
            root: process.cwd(),
            verbose: true,
            dry: false
        }),
        new webpack.IgnorePlugin(/\.(css|less)$/),
        new webpack.BannerPlugin('require("source-map-support").install();',
          { raw: true, entryOnly: false }
        )
    ],
}