const fs = require('fs');
const thunkify = require('thunkify');

let read = thunkify(fs.readFile);
read(process.argv[2])((err, data) => {
    if (err) {
        console.log('read error!');
    } else {
        console.log('read successfully!');
        console.log(data.toString());
    }
});


// simple implementation of thunkify

let Thunk = function (fn) {
    return function (...args) {
        return function (callback) {
            return fn.call(this, ...args, callback);
        };
    };
};

let callback = function (err, data) {
    if (err) {
        console.log('read error!');
    } else {
        console.log('read successfully!');
        console.log(data.toString());
    }
};

let readFileThunk = Thunk(fs.readFile);
readFileThunk(process.argv[2])(callback);