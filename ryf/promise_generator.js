const fs = require('fs');
const Promise = require('promise');

function readFile(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if (err) return reject(err);
            resolve(data);
        });
    });
}

function* gen() {
    var f1 = yield readFile('./promise.js');
    var f2 = yield readFile('.gitignore'); // get r2 after r1
    console.log(f1.toString());
    console.log(f2.toString());
}

// run generator with promise manually
let g = gen();
g.next().value.then((data) => {
    g.next(data).value.then((data) => {
        g.next(data);
    });
});

console.log('reach the end');


// auto runner for generator
function run(fn) {
    let gen = fn();
    function next (data) {
        let res = gen.next(data);
        if (res.done) return;
        res.value.then((data) => {
            next(data);
        });
    }
    next(); // no need to keep consistent arguments 
    // call the next in run
}

run(gen);

console.log('reach the end');