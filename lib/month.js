var day = require('./day');
var diff = require('./diff');


/**
 * Module exports
 */

exports.ceil = ceil;
exports.diff = diff(shift);
exports.floor = floor;
exports.shift = shift;


/**
 * Floor the `date` to the previous month
 */

function floor (date) {
  date = day.floor(date);
  date.setUTCDate(1);
  return date;
}


/**
 * Ceiling the `date` to the next month
 */

function ceil (date) {
  var floored = floor(date);
  var roundUp = floored.getTime() !== date.getTime();
  if (roundUp) floored.setUTCMonth(floored.getUTCMonth() + 1);
  return floored;
}


/**
 * Shift the `date` by `amount` months
 */

function shift (date, amount) {
  date = new Date(date);
  date.setUTCMonth(date.getUTCMonth() + amount);
  return date;
}