var fs = require('fs');
var path = require('path');

function traverse(dir, callback) {
    fs.readdirSync(dir).forEach(function (file) {
        var pathname = path.join(dir, file);
        if (fs.statSync(pathname).isDirectory()) {
            traverse(pathname, callback);
        } else {
            callback(pathname);
        }
    });
}

var basedir = process.argv[2];
traverse(basedir, console.log);