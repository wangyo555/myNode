var fs = require('fs');
var data = '写入：醉后不知天在水，满船清梦压星河';

var writeStream = fs.createWriteStream('output.txt');

writeStream.write(data, 'UTF8');

writeStream.end();

writeStream.on('finish', function() {
    console.log('写入完成。。。');
});

writeStream.on('error', function(err) {
    console.log(err.stack);
});


console.log('Task End');