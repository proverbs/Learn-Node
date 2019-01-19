const co = require('co');
const [fs, thunkify ]= [require('fs'), require('thunkify')];

const readFileThunkify = thunkify(fs.readFile);

function* gen() {
    let r1 = yield readFileThunkify('./promise.js');
    console.log(r1.toString());
    let r2 = yield readFileThunkify('./.gitignore');
    console.log(r2.toString());
}

co(gen).then(() => { // co return a promise
    console.log('generator exited successfully');
}, (err) => {
    console.log(err);
});

console.log('reach the end');