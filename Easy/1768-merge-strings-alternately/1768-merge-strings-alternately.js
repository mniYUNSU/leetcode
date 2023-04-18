/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    // word1.length 와 word2.length의 최대값 만큼 반복한다.
    // word[index] 가 존재한다면 그 글자를 붙이고, 아니라면 '' 을 붙인다.
    
    let result = '', pointer = 0;
    let iteratee = Math.max(word1.length, word2.length);
    
    while (pointer < iteratee) {
        result += (word1[pointer] ?? '') + (word2[pointer] ?? '');
        pointer++;
    }
    
    return result;
};