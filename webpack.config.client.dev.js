const webpack = require('webpack');
const path = require('path');
const webpackDevServerUrl = 'http://localhost:3002';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-inline-source-map',
    entry: [
        'babel-polyfill',
        'webpack-dev-server/client?' + webpackDevServerUrl, // Important
        'webpack/hot/only-dev-server', // Important
        './src/client/index'
    ],
    output: {
        path: path.resolve(__dirname, 'dist', 'assets'),
        publicPath: webpackDevServerUrl, // MUST BE FULL PATH!
        filename: 'js/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel',
                include: path.resolve('src'),
                exclude: path.resolve('src', 'server'),
                query: {
                    presets: ['es2015', 'stage-2']
                }
            },
            {
                test: /\.ect?$/,
                exclude: [
                    path.resolve('src', 'server', 'pages'),
                    path.resolve('src', 'server', 'parts'),
                ],
                include: path.resolve('src', 'server'),
                loader: 'html-loader',
                query: {
                    presets: ['es2015', 'stage-0']
                }
            }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, 'dist', 'server', 'views', 'frontend.ect'),
            template: path.resolve(__dirname, 'src', 'server', 'views', 'frontend.ect')
        }),
        new CopyWebpackPlugin([
            { from: './src//server/views/pages', to: path.resolve(__dirname, 'dist', 'server', 'views', 'pages') },
            { from: './src//server/views/parts', to: path.resolve(__dirname, 'dist', 'server', 'views', 'parts') },
            { from: './src/assets', to: path.resolve(__dirname, 'dist', 'assets') }
        ])
    ]
};