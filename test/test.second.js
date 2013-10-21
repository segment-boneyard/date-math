var second = require('../').second;
var harness = require('./harness');


var date = new Date('2013-05-09T04:05:05.001Z');
var floored = new Date('2013-05-09T04:05:05.000Z');
var ceiled = new Date('2013-05-09T04:05:06.000Z');

describe('second', harness(second, date, floored, ceiled));