/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    // result array variable
    let result = [];
    // recursion
    // word.length === 2n, return
    // left < n recur(word+(,left+1,right])
    // left > right, match unmatched "("
    recur("", 0, 0, n, result);
    return result;
}; 

const recur = function(currentWord, leftCount, rightCount, n, result) { 
    if (currentWord.length === n*2) {
        result.push(currentWord);
        return;
    }
    if (leftCount < n) {
        recur(currentWord+"(", leftCount+1, rightCount, n, result);
    }
    if (leftCount > rightCount) {
        recur(currentWord+")", leftCount, rightCount+1, n, result);
    }
};