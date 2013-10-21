var minute = require('../').minute;
var harness = require('./harness');

var date = new Date('2013-05-09T04:05:05.001Z');
var floored = new Date('2013-05-09T04:05:00.000Z');
var ceiled = new Date('2013-05-09T04:06:00.000Z');

describe('minute', harness(minute, date, floored, ceiled));
