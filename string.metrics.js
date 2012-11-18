/**
 * Copyright (c) 2012.
 * Licensed under the MIT License.
 * See LICENSE for detailed information.
 *
 * JavaScript
 *
 * @fileoverview        Methods to compute string metrics.
 * @version             0.3.0
 * @author              Jonathan Ruttan <jonruttan@iwastenotsystems.com>
 * @license             http://www.opensource.org/licenses/mit-license.php The MIT License.
 * @package             String.metrics
 *
 */
// TODO: Finalize Node namespace settings
// +[Fix String.metrics namespace hack]--JR
(function(exports) {
    'use strict';

    /**
     * @namespace Contains methods to compute string metrics.
     * @name String.metrics
     */
    var fns = exports.metrics = {
        /**
         * Compute the distance between two strings as a fraction of the length
         * of the longer of the two strings.
         *
         * @public
         * @memberOf                  String.metrics
         * @param   {String} str1     One of the strings to score against.
         * @param   {String} str2     One of the strings to score against.
         * @param   {Number|Function} distance
         *                            An integer distance between strings,
         *                            or a function to compute the distance.
         * @return  {Number}          Returns the computed distance between the
         *                            two argument strings as a fraction.
         */
        fraction: function( str1, str2, distance ) {
            var length = Math.max(str1.length, str2.length);
            return length ? 1 - (typeof distance === 'function' ?
                        distance( str1, str2 ) : distance) / length : 1;
        },

        /**
         * Compute the Levenshtein distance between two strings.
         *
         * @public
         * @memberOf              String.metrics
         * @see Source: <a href="http://en.wikibooks.org/wiki/Algorithm_Implementation/Strings/Levenshtein_distance#JavaScript">Wikibooks:Algorithm Implementation/Strings/Levenshtein distance</a>
         * @see Wikipedia: <a href="http://en.wikipedia.org/wiki/Levenshtein_distance">Levenshtein distance</a>
         * @param   {String} str1 One of the strings to score against.
         * @param   {String} str2 One of the strings to score against.
         * @return  {Number}      Returns the computed Levenshtein distance
         *                        between the two argument strings.
         */
        levenshteinDistance: function(str1, str2) {
            if (str1.length === 0) return str2.length;
            if (str2.length === 0) return str1.length;

            var matrix = [];

            // increment along the first column of each row
            var i;
            for (i = 0; i <= str2.length; i++) {
                matrix[i] = [i];
            }

            // increment each column in the first row
            var j;
            for (j = 0; j <= str1.length; j++) {
                matrix[0][j] = j;
            }

            // Fill in the rest of the matrix
            for (i = 1; i <= str2.length; i++) {
                for (j = 1; j <= str1.length; j++) {
                    if (str2.charAt(i - 1) == str1.charAt(j - 1)) {
                        matrix[i][j] = matrix[i - 1][j - 1];
                    } else {
                        matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, // substitution
                                Math.min(matrix[i][j - 1] + 1, // insertion
                                    matrix[i - 1][j] + 1)); // deletion
                    }
                }
            }

            return matrix[str2.length][str1.length];
        },

        /**
         * Compute the Levenshtein distance between two strings as a fraction
         * of the length of the longer of the two strings.
         * .
         *
         * @public
         * @memberOf              String.metrics
         * @param   {String} str1 One of the strings to score against.
         * @param   {String} str2 One of the strings to score against.
         * @return  {Number}      Returns the computed distance between the two
         *                        argument strings as a fraction.
         */
        levenshteinFraction: function( str1, str2 ) {
            return exports.metrics.fraction(str1, str2,
                    exports.metrics.levenshteinDistance);
        }
    };
})(typeof exports === 'undefined' ? String : exports);
