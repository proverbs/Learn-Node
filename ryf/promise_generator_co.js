const co = require('co');
const [fs, Promise ]= [require('fs'), require('promise')];

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

co(gen).then(() => { // co return a promise
    console.log('generator exited successfully');
}, (err) => {
    console.log(err);
});

console.log('reach the end');