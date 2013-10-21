var assert = require('assert');

module.exports = function (timespan, date, ceiled) {
  return function () {
    it('should ceil unceiled dates', function () {
      assert.equal(timespan.ceil(date).getTime(), ceiled.getTime());
    });

    it('should not ceil already floored dates', function () {
      assert.equal(timespan.ceil(ceiled).getTime(), ceiled.getTime());
    });
  };
};