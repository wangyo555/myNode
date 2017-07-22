// 方式一
// exports.world = function() {
//     console.log('Hello World。。。');
// }

// 方式二：将对象封装的模块中
function Hello() {
    var name;
    this.setName = function(thyName) {
        name = thyName;
    }
    this.sayHello = function() {
        console.log('Hello ' + name);
    }
}

module.exports = Hello;