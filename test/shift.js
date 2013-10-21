var assert = require('assert');

module.exports = function (timespan) {
  return function () {
    it('should shift positively', function () {
      var amount = 10000;
      var start = new Date('2013-05-09');
      var end = timespan.shift(start, amount);
      assert.equal(timespan.diff(start, end), amount);
    });

    it('should shift negatively', function () {
      var amount = -10000;
      var start = new Date('2013-10-22');
      var end = timespan.shift(start, amount);
      assert.equal(timespan.diff(start, end), amount);
    });
  };
};