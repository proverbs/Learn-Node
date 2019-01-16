
function heavy(callback) {
    setTimeout(function() {
        var count = 0;
        for (var i = 0; i < 100000; i ++) {
            for (var j = 0; j < 10000; j ++) {
                count += 1;
            }
        }
        callback(count);
    }, 0);
}

heavy(console.log);

console.log('Keep running following code ...');