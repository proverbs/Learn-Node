const Promist = require('promise');

function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done'); // func_name, second, args
    });
}

timeout(100).then((value) => {
    console.log(value);
});