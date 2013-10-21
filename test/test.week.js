var week = require('../').week;
var harness = require('./harness');


var date = new Date('2013-05-09T04:05:05.001Z');
var floored = new Date('2013-05-06T00:00:00.000Z');
var ceiled = new Date('2013-05-13T00:00:00.000Z');

describe('week', harness(week, date, floored, ceiled));