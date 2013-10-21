var diff = require('./diff');


/**
 * Module exports
 */

exports.ceil = ceil;
exports.diff = diff(shift);
exports.floor = floor;
exports.shift = shift;


/**
 * Floors the date to the current minute
 *
 * @param {Date} date
 * @return {Date}
 */

function floor (date) {
  date = new Date(date);
  date.setUTCMilliseconds(0);
  return date;
}


/**
 * Ceilings the date to the next minute
 *
 * @param {Date} date
 * @return {Date}
 */

function ceil (date) {
  var floored = floor(date);
  var roundUp = floored.getTime() !== date.getTime();
  if (roundUp) floored.setUTCSeconds(floored.getUTCSeconds() + 1);
  return floored;
}


/**
 * Shifts the date by `amount` minutes
 *
 * @param {Date} date
 * @param {Number} amount
 */

function shift (date, amount) {
  date = new Date(date);
  date.setUTCSeconds(date.getUTCSeconds() + amount);
  return date;
}


