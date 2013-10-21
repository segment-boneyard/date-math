var diff = require('./diff');
var month = require('./month');


/**
 * Module exports
 */

exports.ceil = ceil;
exports.diff = diff(shift);
exports.floor = floor;
exports.shift = shift;


/**
 * Floor the `date` to the beginning of the current year.
 */

function floor (date) {
  date = month.floor(date);
  date.setUTCMonth(0);
  return date;
}


/**
 * Ceil the `date` to the next year
 */

function ceil (date) {
  var floored = floor(date);
  var roundUp = floored.getTime() !== date.getTime();
  if (roundUp) floored.setUTCFullYear(floored.getUTCFullYear() + 1);
  return floored;
}


/**
 * Shift the `date` by the `amount` of years
 */

function shift (date, amount) {
  date = new Date(date);
  date.setUTCFullYear(date.getUTCFullYear() + amount);
  return date;
}