var bin = new Buffer([0x68, 0x65, 0x6c, 0x6f]);

console.log(bin[0]);

var str = bin.toString('utf-8');
console.log(str);

var sayhi = new Buffer('say hi', 'utf-8');
console.log(sayhi.toString('utf-8'));