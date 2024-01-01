const assert = require('assert');
const Rooster = require('../index');

describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {
      // Define expected output
      const expected = 'cock-a-doodle-doo!';
      // Call Rooster.announceDawn and store result in variable
      const result = Rooster.announceDawn();
      // Use an assert method to compare actual and expected result
      assert.equal(result, expected);
    });
  });

  describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {
      // Define expected output
      const expected = '6';
      // Call Rooster.announceDawn and store result in variable
      const result = Rooster.timeAtDawn(6);
      // Use an assert method to compare actual and expected result
      assert.strictEqual(result, expected);
    });

    it('throws an error if passed a number less than 0', () => {
      // Define expected output
      const expected = RangeError;
      // Call Rooster.announceDawn and store result in variable
      const hour = -1;
      // Use an assert method to compare actual and expected result
      assert.throws(
        () => {
          Rooster.timeAtDawn(hour);
        },
        expected
      );
    });

    it('throws an error if passed a number less greater than 23', () => {
      // Define expected output
      const expected = RangeError;
      // Call Rooster.announceDawn and store result in variable
      const hour = 25;
      // Use an assert method to compare actual and expected result
      assert.throws(
        () => {
          Rooster.timeAtDawn(hour);
        },
        expected
      );
    })
  });
});
