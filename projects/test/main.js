

function fibonacci(n) {
    if (isNaN(n)) throw new Error('n should be a number');
    if (n < 0) throw new Error('n should >= 0');
    else if (n > 10) throw new Error('n should <= 10');
    else if (n === 0) return 0;
    else if (n === 1) return 1;
    else return fibonacci(n - 1) + fibonacci(n - 2);
}

if (require.main === module) {
    // run node main.js
    let n = parseInt(process.argv[2], 10);
    console.log(`fibonacci(${n}) is: ` + fibonacci(n));
}

exports.fibonacci = fibonacci;
// module.exports.fibonacci = fibonacci;