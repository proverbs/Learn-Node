// ref: https://juejin.im/entry/56c46015c24aa800528da4d5

var Promise = require('promise');

var promise = new Promise(function(resolve, reject) {
    var count = 0;
    for (var i = 0; i < 100000; i ++) {
        for (var j = 0; j < 10000; j ++) {
            count += 1;
        }
    }
    resolve(count);
    // reject(-count);
});

promise.then(function (value) {
    console.log('Resolved');
    console.log(value);
}, function (value) {
    console.log('Rejected');
    console.log(value);
});



var promise1 = new Promise(function(resolve, reject) {
    var count = 0;
    for (var i = 0; i < 10000; i ++) {
        for (var j = 0; j < 1000; j ++) {
            count += 1;
        }
    }
    resolve(count);
    // reject(-count);
});

var promise2 = new Promise(function(resolve, reject) {
    var count = 0;
    for (var i = 0; i < 10000; i ++) {
        for (var j = 0; j < 1000; j ++) {
            count += 1;
        }
    }
    // resolve(count);
    reject(-count);
});

Promise.all([promise1, promise2]).then(function ([cnt1, cnt2]) {
    console.log('Resolved');
    console.log(cnt1 + cnt2);
}, function (cnt) { // go into reject when there is ONE rejection, so the argument should not be an array
    console.log('Rejected');
    console.log(cnt);
});