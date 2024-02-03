var assert = require("assert");
var Calculate =  require('./factorial.js')

describe('Calculate', () => {
    describe('.factorial', () => {
      it('5! is equal to 120', () =>{
        // setup
        const expected = 120;
        const number = 5;
        // exercise 
        const factorial = Calculate.factorial(number);
        // verify
        assert.equal(factorial, expected);
      });
    });
  });