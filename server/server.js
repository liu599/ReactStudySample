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

const app = express();

app.use(express.static('./dist'));

app.use('/', function (req, res) {
    res.sendFile(path.resolve('client/index.html'));
});

const port = 3000;

app.listen(port, function(error) {
    if (error) throw error;
    console.log("Express server listening on port", port);
});