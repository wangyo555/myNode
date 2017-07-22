// 方式一
// var hello = require('./hello');
// hello.world();

// 方式二
var Hello = require('./hello')
var hello = new Hello();
hello.setName('Lucy');
hello.sayHello();