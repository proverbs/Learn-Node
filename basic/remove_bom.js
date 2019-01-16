// remove boom in utf-8 files

var fs = require('fs');

function readText(pathname) {
    var bin = fs.readFileSync(pathname);

    if (bin[0] === 0xEF && bin[1] === 0xBB && bin[1] === 0x8F) {
        bin = bin.slice(3);
        console.log('BOM detected.')
    }

    return bin.toString('utf-8');
}

var pathname = process.argv[2];
console.log(readText(pathname));