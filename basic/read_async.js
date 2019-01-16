var fs = require('fs');

var src = process.argv.slice(2)[0];

fs.readFile(src, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

