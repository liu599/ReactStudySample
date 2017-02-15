/*
 * @author: tokei
 * @desc: webpack configuration
 * @date: 2017/2/15
 * @license: M.I.T
 */

/* eslint-disable strict */
// File | Settings | Languages&Frameworks | Node.js and NPM for Windows and Linux
// IntelliJ IDEA | Preferences | Languages&Frameworks | Node.js and NPM for OS X

'use strict';

const path = require('path');

module.exports = {
    entry: ['./client/client.js'],  // starting file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    module: {
        loaders: [
            {
                test: /\.js$/, // if there is .js at the end, run the loader
                loader: 'babel-loader',
                exclude: /node_modules/,
                // tell babel what to do
                // compile js and ES6 preset
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }

}

