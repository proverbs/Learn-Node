const fs = require('fs');

let Thunk = function (filename) {
    return function (callback) {
        return fs.readFile(filename, callback);
    };
};

let callback = function (err, data) {
    if (err) {
        console.log('read error!');
    } else {
        console.log('read successfully!');
        console.log(data);
    }
};

let readFileThunk = Thunk(process.argv[2]);
readFileThunk(callback);
