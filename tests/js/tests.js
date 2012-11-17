test('String.levenshteinDistance()', function() { 
    ok(String.levenshteinDistance('', '') === 0, "Empty strings are equal"); 
    ok(String.levenshteinDistance('a', 'aa') === 1, "'a', 'aa' <>= 1"); 
    ok(String.levenshteinDistance('a', '') === 1, "'a', '' <>= 1"); 
    ok(String.levenshteinDistance('a', 'b') === 1, "'a', 'b' <>= 1"); 
    ok(String.levenshteinDistance('A', 'aa') === 2, "'A', 'aa' <>= 1"); 
    ok(String.levenshteinDistance('aa', 'a') === 1, "'aa', 'a' <>= 1"); 
    ok(String.levenshteinDistance('', 'a') === 1, "'', 'a' <>= 1"); 
    ok(String.levenshteinDistance('b', 'a') === 1, "'b', 'a' <>= 1"); 
    ok(String.levenshteinDistance('aa', 'A') === 2, "'aa', 'A' <>= 1"); 
    ok(String.levenshteinDistance('kitten', 'sitting') === 3, "'kitten', 'sitting' <>= 3"); 
    ok(String.levenshteinDistance('Saturday', 'Sunday') === 3, "'Saturday', 'Sunday' <>= 3"); 
    ok(String.levenshteinDistance('Saturday', 'sunday') === 4, "'Saturday', 'sunday' <>= 4"); 
});