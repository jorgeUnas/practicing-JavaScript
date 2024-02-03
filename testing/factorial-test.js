var assert = require("assert");
var Calculate =  require('./factorial-test.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('5! is equal to 120', () =>{
      assert.equal(Calculate.factorial(5), 120);
    });
  });
});