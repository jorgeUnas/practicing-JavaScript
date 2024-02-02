const assert = require('assert');
const Calculate =  require('./tdd.js')

describe('Calculate', () => {
  describe('.sum',() => {
    it('returns the sum of an array of numbers', () => {
      //setup
      const expectedResult = 6;
      const inputArray = [1,2,3]
      //exercise
      const result = Calculate.sum(inputArray)
      //verifycation
      assert.strictEqual(result, expectedResult);
    });
  });
});