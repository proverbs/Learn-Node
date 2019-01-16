var fs = require('fs');

function run_read(argv) {
    var src = argv[0];
    var dst = argv[1];
    var rs = fs.createReadStream(src);
    var ws = fs.createWriteStream(dst);

    rs.on('data', function (chunk) {
        // ws.write(chunk);
        console.log(`Received ${chunk.length} bytes of data.`);
    });
    
    rs.on('end', function () {
        // ws.end();
        console.log('clean up');
    });

    rs.pipe(ws);
}

run_read(process.argv.slice(2));