var month = require('../').month;
var harness = require('./harness');


var date = new Date('2013-05-09T04:05:05.001Z');
var floored = new Date('2013-05-01T00:00:00.000Z');
var ceiled = new Date('2013-06-01T00:00:00.000Z');

describe('month', harness(month, date, floored, ceiled));