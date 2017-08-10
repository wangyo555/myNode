// 程序入口

// 引入模块
var http = require('http'); // 处理url请求
var url = require('url'); // 解析请求参数和路径
var fs = require('fs'); // 用来读取静态文件
var path = require('path'); // 用来匹配路径的扩展名


http.createServer(function(req, res) {

    var param = url.parse(req.url, true).query; // 获取url的查询参数
    var pathname = url.parse(req.url).pathname; // 获取url的路径

    if (pathname === '' || pathname === '/') {
        pathname = '/index.html';
    }

    // 不允许请求其他路径的文件



    console.log('req for ' + pathname + 'receieved.');

    fs.readFile(pathname.substr(1), function(err, data) {
        if (err) {
            console.log(err);
            res.writeHead(400, { 'Content-Type': 'text/html' });
        } else {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write('Hello world.');
            // console.log(data.toString())
        }
    });

    res.end();
}).listen(8808);

console.log('Server running at http://127.0.0.1:8808/');