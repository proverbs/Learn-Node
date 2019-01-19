
const [fs, thunkify ]= [require('fs'), require('thunkify')];

const readFileThunkify = thunkify(fs.readFile);

function* gen() {
    let r1 = yield readFileThunkify('./promise.js');
    console.log(r1.toString());
    let r2 = yield readFileThunkify('./.gitignore'); // get r2 after r1
    console.log(r2.toString());
}

// run generator with thunkify manually
let g = gen();
let r1 = g.next();
r1.value((err, data) => {
    if (err) throw err;
    let r2 = g.next(data);
    r2.value((err, data) => {
        if (err) throw err;
        g.next(data);
    });
});

console.log('reach the end');

// auto runner for generator
function run(fn) {
    let gen = fn();
    function next (err, data) {
        let res = gen.next(data);
        if (res.done) return;
        res.value(next);
    }
    next(); // no need to keep consistent arguments 
    // call the next in run
}

run(gen);

console.log('reach the end');