var fs = require('fs');
var zlib = require('zlib');

// 创建一个可读流
var readerStream = fs.createReadStream('input.txt');

// 创建一个可写流
var writeStream = fs.createWriteStream('stream.txt');

// 管道读写操作，读取input.txt的内容，并将内容写入到stream.txt文件中
readerStream.pipe(writeStream);

console.log('文件流读写完成');


// 链式流，文件压缩和解压
fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.compress.gz'));

console.log('文件压缩完成。')

// fs.createReadStream('input.compress.gz')
//     .pipe(zlib.createGunzip())
//     .pipe(fs.createWriteStream('input.decompress.txt'));

// console.log('文件解压完成。')