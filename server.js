var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(request, response) {

    var pathname = url.parse(request.url).pathname;
    console.log('Request for ' + pathname + 'receieved.');

    fs.readFile(pathname.substr(1), function(err, data) {
        if (err) {
            console.log(err);
            response.writeHead(400, { 'Content-Type': 'text/html' });
        } else {
            response.writeHead(200, { 'Content-Type': 'text/plain' });
            response.write('Hello world.');
            // console.log(data.toString())
        }
    });

    response.end();
}).listen(8808);

console.log('Server running at http://127.0.0.1:8808/');