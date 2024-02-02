const assert = require("assert");
const Rooster = require("./rooster");

describe("Rooster", () => {
  describe("Anauncing dawn", () => {
    it("returns a rooster call", () => {
      const expected = "moo!";

      let result = Rooster.announceDawn();

      assert.strictEqual(result, expected);
    });
  });
  describe("returns its argument as a string", () => {
    it("returns time", () => {
      const expected = "6";

      let result = Rooster.timeAtDawn(6);

      assert.strictEqual(result, expected);
    });
  });
  describe("throws an error if passed a number less than 0", () => {
    it("returns error", () => {
      let hour = -1;
      assert.throws(() => {
        Rooster.timeAtDawn(hour);
      }, RangeError);
    });
  });
  describe("throws an error if passed a number greater than 23", () => {
    it("returns error", () => {
      let hour = 24;
      assert.throws(() => {
        Rooster.timeAtDawn(hour);
      }, RangeError);
    });
  });
});
