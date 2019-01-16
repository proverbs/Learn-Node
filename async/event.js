// ref: http://www.runoob.com/nodejs/nodejs-event.html

var events = require('events');

var heavy = new events.EventEmitter();

// events will be executed one by one
heavy.on('done', print);
heavy.addListener('done', sayhi);

var count = 0;

setTimeout(function() {
    for (var i = 0; i < 100000; i ++) {
        for (var j = 0; j < 10000; j ++) {
            count += 1;
        }
    }
    heavy.emit('done');
}, 0);

function print() {
    console.log(count);
}

function sayhi() {
    console.log('hi~');
}

console.log('Keep running following code ...');
// heavy.removeListener('done', print);
console.log(heavy.listeners('done'))