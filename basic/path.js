var path = require('path');

var p = process.argv.slice(2)[0];

console.log(path.normalize(p));
console.log(path.extname(p));
