var assert = require('assert');

module.exports = function (timespan) {
  return function () {
    it ('should diff properly', function () {
      var start = new Date('2013-05-09T00:00:00Z');
      var end = timespan.shift(start, 1000);
      assert.equal(timespan.diff(start, end), 1000);
      end = end.getTime() - 100;
      assert.equal(timespan.diff(start, end), 999);
      end = timespan.shift(end, -1);
      assert.equal(timespan.diff(start, end), 998);
    });

    it('should only diff full increments', function () {
      var start = new Date('2013-05-09T04:00Z');
      assert.equal(timespan.diff(start, start + 100), 0);
    });
  };
};