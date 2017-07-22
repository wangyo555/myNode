var fs = require('fs');

//阻塞代码示例
var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log('Task completed!');

// 非阻塞代码示例
fs.readFile('input.txt', function(err, data) {

    //两种写法

    // 第一种：if判断，如果只符合条件则return一个指令，不向下执行,下面的语句可不写else
    if (err) {
        return console.error(err);
    }
    console.log(data.toString());

    // 第二种，if判断，不写return返回，直接写执行的指令，则需要添加else语句，否则还会执行
    // if (err) {
    //     console.error(err);
    // } else {
    //     console.log(data.toString());
    // }

})

console.log('Task End');