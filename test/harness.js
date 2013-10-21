
/**
 * Testing harness
 */

var ceil = require('./ceil');
var diff = require('./diff');
var floor = require('./floor');
var shift = require('./shift');


module.exports = function (timespan, date, floored, ceiled) {
  return function () {
    describe('#ceil()', ceil(timespan, date, ceiled));
    describe('#floor()', floor(timespan, date, floored));
    describe('#diff()', diff(timespan));
    describe('#shift()', shift(timespan));
  };
};