var fs = require('fs');

function copy_large_file(src, dst) {
    fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}

function run_copy(argv) {
    copy_large_file(argv[0], argv[1]);
}

run_copy(process.argv.slice(2));