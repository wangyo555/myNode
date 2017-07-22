// 引入 events 模块
var events = require('events');

// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

// 使用匿名函数绑定 some_event 事件
eventEmitter.on('some_event', function() {
    console.log('some_event事件触发。。。');
});

// 事件名可以相同，触发时依次调用
eventEmitter.on('some_event', function() {
    console.log('第二个some_event事件触发。。。');
});
setTimeout(function() {
    eventEmitter.emit('some_event');
}, 2000)