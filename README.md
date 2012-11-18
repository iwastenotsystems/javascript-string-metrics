# javascript-string-metrics

Methods to compute [String Metrics](http://en.wikipedia.org/wiki/String_metric)
for *web browsers* and *[Node.js](http://nodejs.org/)*.

## Supported Metrics
  * [Levenshtein Distance](http://en.wikipedia.org/wiki/Levenshtein_distance)

## Usage Examples
### Node.js
```javascript
var s = require('./string.metrics.js');
var str1 = 'cat';
var str2 = 'cow';
var distance = s.metrics.levenshteinDistance(str1, str2);
var fraction = s.metrics.levenshteinFraction(str1, str2);

console.log("The Levenshtein distance between '" + str1 + "' and '" + str2 + "' is " + distance + ' characters.');
console.log("The Levenshtein match between '" + str1 + "' and '" + str2 + "' is " + fraction * 100 + '%');
```
### Browser
```html
<!DOCTYPE html>
<html>
<head>
	<title>String.metrics Example</title>
	<script type="text/javascript" src="string.metrics.js"></script>
	<script type="text/javascript">
		window.onload = function () {
			var str1 = 'cat';
			var str2 = 'cow';
			var distance = String.metrics.levenshteinDistance(str1, str2);
			var fraction = String.metrics.levenshteinFraction(str1, str2);

			var elt = document.getElementById('string-metrics');

			elt.innerHTML += "The Levenshtein distance between '" + str1 + 
					"' and '" + str2 + "' is " + distance + ".<br />";
			elt.innerHTML += "The Levenshtein match between '" + str1 + 
					"' and '" + str2 + "'  is " + fraction * 100 + "%<br />";
		}
	</script>
</head>
<body>
	<h1>String.metrics Example</h1>
	<p id="string-metrics"></p>
</body>
</html>
```

## License
### The MIT License (MIT)
Copyright (c) 2012 iWasteNot Systems Inc.
<http://iwastenotsystems.com/>

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
