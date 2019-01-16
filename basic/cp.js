var fs = require('fs');

function copy(src, dst) {
    fs.writeFileSync(dst, fs.readFileSync(src));
}

function run_copy(argv) {
    copy(argv[0], argv[1]);
}

run_copy(process.argv.slice(2));