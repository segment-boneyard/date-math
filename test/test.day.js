var day = require('../').day;
var harness = require('./harness');


var date = new Date('2013-05-09T04:05:05.001Z');
var floored = new Date('2013-05-09T00:00:00.000Z');
var ceiled = new Date('2013-05-10T00:00:00.000Z');

describe('day', harness(day, date, floored, ceiled));