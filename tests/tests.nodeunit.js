// TODO: Fix String.metrics namespace hack--JR
String.metrics = require('../string.metrics.js').metrics;

var maxLength = function (str1, str2) {
    return Math.max(str1.length, str2.length);
};

exports.testFraction = function(test) {
    var pairs = [
        ['', ''], ['a', ''], ['', 'a'], ['a', 'a']
    ];

    var render = function (str1, str2, difference, expect) {
        return "String.metrics.fraction('"+str1+"', '"+str2+"', "+difference+") === "+expect+";";
    };

    test.expect(4 * pairs.length);

    var i, pair;
    for(i=0; i < pairs.length; i++) {
        pair = pairs[i];
        test.ok(String.metrics.fraction(pair[0], pair[1], 0) === 1,
                render(pair[0], pair[1], 0, 1));
    }

    for(i=0; i < pairs.length; i++) {
        pair = pairs[i];
        test.ok(String.metrics.fraction(pair[0], pair[1], 1) === 1 - maxLength(pair[0], pair[1]),
                render(pair[0], pair[1], 1, "1 - maxLength('"+pair[0]+"', '"+pair[1]+"')"));
    }

    for(i=0; i < pairs.length; i++) {
        pair = pairs[i];
        test.ok(String.metrics.fraction(pair[0], pair[1], maxLength) === 1 - maxLength(pair[0], pair[1]),
                render(pair[0], pair[1], 'maxLength', "1 - maxLength('"+pair[0]+"', '"+pair[1]+"')"));
    }

    for(i=0; i < pairs.length; i++) {
        pair = pairs[i];
        test.ok(String.metrics.fraction(pair[0], pair[1], maxLength) === 1 - maxLength(pair[0], pair[1]),
                render(pair[0], pair[1], 'maxLength', "1 - maxLength('"+pair[0]+"', '"+pair[1]+"')"));
    }

    test.done();
};

exports.testLevenshteinDifference = function(test){
    test.expect(24);
    test.ok(String.metrics.levenshteinDistance('', '') === 0, "'', '' <>= 0");
    test.ok(String.metrics.levenshteinDistance('a', 'aa') === 1, "'a', 'aa' <>= 1");
    test.ok(String.metrics.levenshteinDistance('a', '') === 1, "'a', '' <>= 1");
    test.ok(String.metrics.levenshteinDistance('a', 'b') === 1, "'a', 'b' <>= 1");
    test.ok(String.metrics.levenshteinDistance('A', 'aa') === 2, "'A', 'aa' <>= 2");
    test.ok(String.metrics.levenshteinDistance('aa', 'a') === 1, "'aa', 'a' <>= 1");
    test.ok(String.metrics.levenshteinDistance('', 'a') === 1, "'', 'a' <>= 1");
    test.ok(String.metrics.levenshteinDistance('b', 'a') === 1, "'b', 'a' <>= 1");
    test.ok(String.metrics.levenshteinDistance('aa', 'A') === 2, "'aa', 'A' <>= 2");
    test.ok(String.metrics.levenshteinDistance('baaz', 'abaz') === 2, "'baaz', 'abaz' <>= 2");
    test.ok(String.metrics.levenshteinDistance('baaz', 'aabz') === 2, "'baaz', 'aabz' <>= 2");
    test.ok(String.metrics.levenshteinDistance('bacz', 'abcz') === 2, "'bacz', 'abcz' <>= 2");
    test.ok(String.metrics.levenshteinDistance('bacz', 'cabz') === 2, "'bacz', 'cabz' <>= 2");
    test.ok(String.metrics.levenshteinDistance('baaz', 'abacz') === 2, "'baaz', 'abacz' <>= 2");
    test.ok(String.metrics.levenshteinDistance('baaz', 'aabcz') === 3, "'baaz', 'aabcz' <>= 3");
    test.ok(String.metrics.levenshteinDistance('bacz', 'abcdz') === 3, "'bacz', 'abcdz' <>= 3");
    test.ok(String.metrics.levenshteinDistance('bacz', 'cabdz') === 3, "'bacz', 'cabdz' <>= 3");
    test.ok(String.metrics.levenshteinDistance('baaz', 'abz') === 2, "'baaz', 'abz' <>= 2");
    test.ok(String.metrics.levenshteinDistance('baaz', 'aaz') === 1, "'baaz', 'aaz' <>= 1");
    test.ok(String.metrics.levenshteinDistance('bacz', 'abz') === 2, "'bacz', 'abz' <>= 2");
    test.ok(String.metrics.levenshteinDistance('bacz', 'caz') === 2, "'bacz', 'caz' <>= 2");
    test.ok(String.metrics.levenshteinDistance('kitten', 'sitting') === 3, "'kitten', 'sitting' <>= 3");
    test.ok(String.metrics.levenshteinDistance('Saturday', 'Sunday') === 3, "'Saturday', 'Sunday' <>= 3");
    test.ok(String.metrics.levenshteinDistance('Saturday', 'sunday') === 4, "'Saturday', 'sunday' <>= 4");
    test.done();
};

exports.testlevenshteinFraction = function(test){
    test.expect(24);
    test.ok(String.metrics.levenshteinFraction('', '') === 1, "'', '' <>= 1");
    test.ok(String.metrics.levenshteinFraction('a', 'aa') === 0.5, "'a', 'aa' <>= 0.5");
    test.ok(String.metrics.levenshteinFraction('a', '') === 0, "'a', '' <>= 0");
    test.ok(String.metrics.levenshteinFraction('a', 'b') === 0, "'a', 'b' <>= 0");
    test.ok(String.metrics.levenshteinFraction('A', 'aa') === 0, "'A', 'aa' <>= 0");
    test.ok(String.metrics.levenshteinFraction('aa', 'a') === 0.5, "'aa', 'a' <>= 0.5");
    test.ok(String.metrics.levenshteinFraction('', 'a') === 0, "'', 'a' <>= 0");
    test.ok(String.metrics.levenshteinFraction('b', 'a') === 0, "'b', 'a' <>= 0");
    test.ok(String.metrics.levenshteinFraction('aa', 'A') === 0, "'aa', 'A' <>= 0");
    test.ok(String.metrics.levenshteinFraction('baaz', 'abaz') === 0.5, "'baaz', 'abaz' <>= 0.5");
    test.ok(String.metrics.levenshteinFraction('baaz', 'aabz') === 0.5, "'baaz', 'aabz' <>= 0.5");
    test.ok(String.metrics.levenshteinFraction('bacz', 'abcz') === 0.5, "'bacz', 'abcz' <>= 0.5");
    test.ok(String.metrics.levenshteinFraction('bacz', 'cabz') === 0.5, "'bacz', 'cabz' <>= 0.5");
    test.ok(String.metrics.levenshteinFraction('baaz', 'abacz') === 0.6, "'baaz', 'abacz' <>= 0.6");
    test.ok(String.metrics.levenshteinFraction('baaz', 'aabcz') === 0.4, "'baaz', 'aabcz' <>= 0.4");
    test.ok(String.metrics.levenshteinFraction('bacz', 'abcdz') === 0.4, "'bacz', 'abcdz' <>= 0.4");
    test.ok(String.metrics.levenshteinFraction('bacz', 'cabdz') === 0.4, "'bacz', 'cabdz' <>= 0.4");
    test.ok(String.metrics.levenshteinFraction('baaz', 'abz') === 0.5, "'baaz', 'abz' <>= 0.5");
    test.ok(String.metrics.levenshteinFraction('baaz', 'aaz') === 0.75, "'baaz', 'aaz' <>= 0.75");
    test.ok(String.metrics.levenshteinFraction('bacz', 'abz') === 0.5, "'bacz', 'abz' <>= 0.5");
    test.ok(String.metrics.levenshteinFraction('bacz', 'caz') === 0.5, "'bacz', 'caz' <>= 0.5");
    test.ok(String.metrics.levenshteinFraction('kitten', 'sitting') === 0.5714285714285714, "'kitten', 'sitting' <>= 0.5714285714285714");
    test.ok(String.metrics.levenshteinFraction('Saturday', 'Sunday') === 0.625, "'Saturday', 'Sunday' <>= 0.625");
    test.ok(String.metrics.levenshteinFraction('Saturday', 'sunday') === 0.5, "'Saturday', 'sunday' <>= 0.5");
    test.done();
};
