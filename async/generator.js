// ref: http://es6.ruanyifeng.com/#docs/generator-async
// generator is similar to coroutine

function* heavy() {
    yield 'generator started ...'; // yield: pause
    var count = 0;
    for (var i = 0; i < 100000; i ++) {
        for (var j = 0; j < 10000; j ++) {
            count += 1;
        }
    }
    return count; // done
}

var generator = heavy(); // [1]

var start = generator.next(); // [2]
console.log(start);

var done = generator.next(); // [3]
console.log('Finished');
console.log(done)