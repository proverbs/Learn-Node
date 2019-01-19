// async with concurrency, no requirement of executed ordering

const co = require('co');
const Promise = require('promise');

function* gen() {
    let res = yield [
        Promise.resolve('value 1'),
        Promise.reject('value 2')
    ];
    console.log(res);
}

co(gen).then(() => {
    console.log('generator exited successfully');
}, (err) => {
    console.log(err);
});