var assert = require('assert');

module.exports = function (timespan, date, floored) {
  return function () {
    it('should floor unfloored dates', function () {
      assert.equal(timespan.floor(date).getTime(), floored.getTime());
    });

    it('should not floor already floored dates', function () {
      assert.equal(timespan.floor(floored).getTime(), floored.getTime());
    });
  };
};