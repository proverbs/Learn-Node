// ref: https://nya.io/Node-js/promise-in-nodejs-get-rid-of-callback-hell/

var fs = require('fs');
var Q = require('q');
var deferred = Q.defer();

function heavy() {
    var count = 0;
    for (var i = 0; i < 100000; i ++) {
        for (var j = 0; j < 10000; j ++) {
            count += 1;
        }
    }
    deferred.resolve(count); // return value
    // deferred.reject('reject');
    return deferred.promise;
}

function print() {
    console.log(count);
}


heavy().then(function(success) {
    console.log('success');
    console.log(success);
}, function(err) {
    console.log(err);
});