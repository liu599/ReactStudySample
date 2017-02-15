/*
 * @author: tokei
 * @desc:
 * @date: 2017/2/15
 * @license: M.I.T
 */

/* eslint-disable strict */

'use strict';

const express = require('express');
const path = require('path');

const config = require('../webpack.config.js');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();

// webpack as a middleware, hook in the server, hot-module-reloading(HMR), show-up-immediately in the browser.
// app.use(webpack in dev mode)
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler,{noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.use(express.static('./dist'));

app.use('/', function (req, res) {
    res.sendFile(path.resolve('client/index.html'));
});

const port = 3000;

app.listen(port, function(error) {
    if (error) throw error;
    console.log("Express server listening on port", port);
});