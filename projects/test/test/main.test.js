const main = require('../main');
const should = require('should');

describe('test/main.test.js', () => {
    it('should equal 55 when n === 10', () => {
        main.fibonacci(10).should.equal(55);
    });

    it('should equal 1 when n === 1', () => {
        main.fibonacci(1).should.equal(1);
    });

    it('should equal 0 when n === 0', () => {
        main.fibonacci(0).should.equal(0);
    });

    it('should throw when n > 10', () => {
        (() => {main.fibonacci(20)}).should.throw('n should <= 10');
    });

    it('should throw when n < 0', () => {
        (() => {main.fibonacci(-1)}).should.throw('n should >= 0');
    })

    it('should throw when n is not a number', () => {
        (() => {main.fibonacci('proverbs')}).should.throw('n should be a number');
    })
});