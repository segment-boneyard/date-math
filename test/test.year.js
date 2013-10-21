var year = require('../').year;
var harness = require('./harness');


var date = new Date('2013-05-09T04:05:05.001Z');
var floored = new Date('2013-01-01T00:00:00.000Z');
var ceiled = new Date('2014-01-01T00:00:00.000Z');

describe('year', harness(year, date, floored, ceiled));