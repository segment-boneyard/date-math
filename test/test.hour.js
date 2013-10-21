var hour = require('../').hour;
var harness = require('./harness');


var date = new Date('2013-05-09T04:05:05.001Z');
var floored = new Date('2013-05-09T04:00:00.000Z');
var ceiled = new Date('2013-05-09T05:00:00.000Z');

describe('hour', harness(hour, date, floored, ceiled));