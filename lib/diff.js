
/**
 * Return a function to find the diff between the start and end for the given
 * shift function.
 *
 * @param {Function} shift  shifts dates by an amount (e.g. day.shift)
 * @return {Function} diff  function to calculate the difference
 */

module.exports = function (shift) {
  return function (start, end) {
    var reversed = end < start;
    if (reversed) {
      var temp = end;
      end = start;
      start = temp;
    }

    var diff = 0;
    for (start = shift(start, 1);
         start <= end;
         start = shift(start, 1)) diff++;

    return reversed ? -diff : diff;
  };
};