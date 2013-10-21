var diff = require('./diff');
var hour = require('./hour');


/**
 * Module exports
 */

exports.ceil = ceil;
exports.diff = diff(shift);
exports.floor = floor;
exports.shift = shift;


/**
 * Floor the `date` to the nearest day
 */

function floor (date) {
  date = hour.floor(date);
  date.setUTCHours(0);
  return date;
}


/**
 * Ceiling the `date` to the next day
 */

function ceil (date) {
  var floored = floor(date);
  var roundUp = floored.getTime() !== date.getTime();
  if (roundUp) floored.setUTCDate(floored.getUTCDate() + 1);
  return floored;
}


/**
 * Shift the `date` by `amount` days
 */

function shift (date, amount) {
  var date = new Date(date);
  date.setUTCDate(date.getUTCDate() + amount);
  return date;
}