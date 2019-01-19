const fetch = require('node-fetch');

function* gen() { // [1]
    let url = 'https://api.github.com/users/github';
    // let url = 'https://api.githuub.com/users/github'; // wrong url for test
    
    console.log(url);
    let result = yield fetch(url); // [2] return a promise
    console.log(result.bio);
}

let g = gen(); // [1]
let result = g.next(); // [2]
result.value.then((data) => { // then: return a new promise
    return data.json(); // return as the argument of the next then
}).then((datajson) => {
    g.next(datajson); // send the value to generator
}).catch((err) => { // handle err
    console.log(err);
});

console.log('reach the end.');