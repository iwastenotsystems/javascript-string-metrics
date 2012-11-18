#!/usr/bin/env node

// This is an inelegant way to get the metrics into the String namespace
// TODO: Fix String.metrics namespace hack--JR
String.metrics = require('../string.metrics.js').metrics;

// Construct an array of pairs of strings to compare.
var pairs = [
	['cow', 'cot'],
	['cow', 'cat'],
	['cowbell', 'cowboy'],
	['foo', 'oof']
];

// Create a rendering function to transform the function name, the pairs of
// strings being compared, and the function result to a formatted string.
var render = function (fnname, str1, str2, result) {
	return "The " + fnname + " between '" + str1 + "' and '" + str2 + "' is " + result;
};

// Iterate over the pairs of strings, run each function an output the formatted
// strings.
for(var i = 0; i < pairs.length; i++) {
	var pair = pairs[i];
	console.log(render("levenshteinDistance", pair[0], pair[1],
			String.metrics.levenshteinDistance(pair[0], pair[1])));

	console.log(render("levenshteinFraction", pair[0], pair[1],
			String.metrics.levenshteinFraction(pair[0], pair[1])));
}
