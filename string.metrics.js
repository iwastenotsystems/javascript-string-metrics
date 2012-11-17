/**
 * Copyright (c) 2012.
 * Licensed under the MIT License.
 * See LICENSE for detailed information.
 * For credits and origins, see AUTHORS.
 *
 * JavaScript
 * 
 * @fileOverview        Methods to compute string metrics.
 * @version             1.0
 * @author              Jonathan Ruttan <jonruttan@iwastenotsystems.com>
 * @lastmodified        2012-11-17
 * @license             http://www.opensource.org/licenses/mit-license.php The MIT License
 * @package             String
 *
 */
"use strict";

/**
 * Compute the Levenshtein distance between two strings.
 *
 * @see Source: <a href="http://en.wikibooks.org/wiki/Algorithm_Implementation/Strings/Levenshtein_distance#JavaScript">Wikibooks:Algorithm Implementation/Strings/Levenshtein distance</a>
 * @see Wikipedia: <a href="http://en.wikipedia.org/wiki/Levenshtein_distance">Levenshtein distance</a>
  * @public
 * @param {String} str1 One of the strings to score against.
 * @param {String} str2 One of the strings to score against.
 * @returns {Number}    Returns the computed Levenshtein distance between the two argument strings.
 * @extends             String
 */
String.levenshteinDistance = function(str1, str2) {
    if(str1.length === 0) return str2.length;
    if(str2.length === 0) return str1.length;

    var matrix = [];

    // increment along the first column of each row
    var i;
    for(i = 0; i <= str2.length; i++){
        matrix[i] = [i];
    }

    // increment each column in the first row
    var j;
    for(j = 0; j <= str1.length; j++){
        matrix[0][j] = j;
    }

    // Fill in the rest of the matrix
    for(i = 1; i <= str2.length; i++){
        for(j = 1; j <= str1.length; j++){
            if(str2.charAt(i-1) == str1.charAt(j-1)){
                matrix[i][j] = matrix[i-1][j-1];
            } else {
                matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, // substitution
                                    Math.min(matrix[i][j-1] + 1, // insertion
                                        matrix[i-1][j] + 1)); // deletion
            }
        }
    }

    return matrix[str2.length][str1.length];
};

