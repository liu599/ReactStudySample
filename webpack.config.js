/*
 * @author: tokei
 * @desc: webpack configuration
 * @date: 2017/2/15
 * @license: M.I.T
 */

/* eslint-disable strict */
// File | Settings | Languages&Frameworks | Node.js and NPM for Windows and Linux
// IntelliJ IDEA | Preferences | Languages&Frameworks | Node.js and NPM for OS X
// Series3 : watch module changing

'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './client/client.js',     // starting file
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    plugins:[
        // Hot Module Replacement
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/, // if there is .js at the end, run the loader
                loader: 'babel-loader',
                exclude: /node_modules/,
                // tell babel what to do
                // compile js with ES6 preset
                query: {
                    presets: ['react', 'es2015','react-hmre']
                    // babel-preset-react-hmre
                }
            }
        ]
    }

}

