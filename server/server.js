/*
 * @author: tokei
 * @desc:
 * @date: 2017/2/15
 * @license: M.I.T
 */

/* eslint-disable strict */

'use strict';
const fs = require ('fs'); // 读写文件
const express = require('express');
const path = require('path');

const config = require('../webpack.config.js');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const bodyParser = require('body-parser');
// 评论文件地址, 是const app = express();server.js当前的位置
const DATA_PATH = path.join(__dirname, '../dist/sampleData.json');



// webpack as a middleware, hook in the server, hot-module-reloading(HMR), show-up-immediately in the browser.
// app.use(webpack in dev mode)
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler,{noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.use(express.static('./dist'));


// 启用bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// 响应头信息
app.use(function(req, res, next){
    // 允许跨域
    res.setHeader('Access-Control-Allow-Origin','*');
    // 缓存设置
    res.setHeader('Cache-Control','no-cache');

    next();
});

// 设定get请求url对应的处理函数
app.get('/api/getComment',function (req, res) {
    fs.readFile(DATA_PATH,function (err, data) {
        if(err) {
            console.log(err);
        }

        res.json(JSON.parse(data));
    })
})
app.use('/', function (req, res) {
    res.sendFile(path.resolve('client/index.html'));
});

const port = 3000;

app.listen(port, function(error) {
    if (error) throw error;
    console.log("Express server listening on port", port);
});