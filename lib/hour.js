var diff = require('./diff');
var minute = require('./minute');


/**
 * Module exports
 */

exports.ceil = ceil;
exports.diff = diff(shift);
exports.floor = floor;
exports.shift = shift;


/**
 * Floor the date to the nearest hour
 */

function floor (date) {
  date = minute.floor(date);
  date.setUTCMinutes(0);
  return date;
}


/**
 * Cailing the date to the next hour
 */

function ceil (date) {
  var floored = floor(date);
  var roundUp = date.getTime() !== floored.getTime();
  if (roundUp) floored.setUTCHours(floored.getUTCHours() + 1);
  return floored;
}


/**
 * Shift the date by `amount` hours.
 */

function shift (date, amount) {
  date = new Date(date);
  date.setUTCHours(date.getUTCHours() + amount);
  return date;
}