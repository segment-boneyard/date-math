
# date-math

  A library to perform mathematical operations on dates. Provides a simple set of functions for working with date ranges, just like you would with `Number`s. Uses native `UTC` APIs rather than simple addition and subtraction, so you can work with dates across timezones.

## Quickstart

```javascript
var Dates = require('date-math');

var now = new Date('2013-10-10T03:45:00Z');

var next = Dates.day.ceil(now); // '2013-10-11T00:00:00.000Z'
var monday = Dates.week.floor(now); // '2013-10-07T00:00:00.000Z'

var future = Dates.month.shift(date, 10); // '2014-08-10T03:45:00.000Z'
var past = Dates.year.shift(date, -10); // '2003-10-10T03:45:00.000Z'

Dates.month.diff(date, future) // 10
Dates.year.diff(date, past); // -10
Dates.month.diff(date, past); // -120

```

## API

  The API follows the general format `module[timespan]`. You can use any of these timespans:

  * second
  * minute
  * hour
  * day
  * week (defaults to ISO week format, starts with monday)
  * month
  * year

  Each timespan has several different methods.

### timespan.floor(date)

  The equivalent of `Math.floor`. Returns a new date which is floored to the start of that 'timespan'. If a date is already floored, then an equal date will be returned.

  ```javascript
  var now = new Date('2013-10-10T03:45:00Z');
  var lastMonday = Dates.week.floor(now); // '2013-10-07T00:00:00.000Z'
  Dates.week.floor(lastMonday); // '2013-10-07T00:00:00.000Z'
  Dates.day.floor(lastMonday); // '2013-10-07T00:00:00.000Z'
  Dates.day.floor(now); // '2013-10-10T00:00:00.000Z'
  ```

### timespan.ceil(date)

  The equivalent of `Math.ceil`. Returns a new date which is ceil'd to the start of the next timespan. If a date already is at the start of a timespan, then an equal date will be returned.

  ```javascript
  var now = new Date('2013-10-10T03:45:00Z');
  var nextMonday = Dates.week.ceil(now); // '2013-10-14T00:00:00.000Z'
  Dates.week.ceil(nextMonday); // '2013-10-14T00:00:00.000Z'
  Dates.day.ceil(nextMonday); // '2013-10-14T00:00:00.000Z'
  Dates.day.ceil(now); // '2013-10-11T00:00:00Z'
  ```

### timespan.diff(start, end)

  The equivalent of subtracting two numbers, `.diff` finds the difference between two dates. It returns the _whole number_ amount of timespans which can fit between the two dates.

  ```javascript
  var now = new Date('2013-10-10T03:45:00Z');
  Dates.day.diff(now, new Date('2013-10-11T00:00:00Z'); // 0
  Dates.day.diff(now, new Date('2013-10-11T03:45:00Z'); // 1
  Dates.day.diff(now, new Date('2013-10-09T03:45:00Z'); // -1
  Dates.day.diff(now, new Date('2013-10-11T03:46:78Z'); // 1
  ```

### timespan.shift(date, amount)

  Shifts the `date` by the `amount` of the timespan. Negative numbers will shift the date into the past.

  ```javascript
  var now = new Date('2013-10-10T03:45:00Z');
  Dates.minute.shift(now, 10); // '2013-10-10T03:55:00Z'
  Dates.minute.shift(now, -10); // 2013-10-10T03:35:00Z
  ```

## License

(The MIT License)

Copyright (c) 2013 segmentio &lt;team@segment.io&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.