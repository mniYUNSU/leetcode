/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    // digits 가 빈값이면 빈배열 리턴
    if(!digits.length) return [];
    
    const map = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    }
    
    let result = [];
    
    // 맵을 순회하며 스트링을 추가해간다.
    // digits 의 길이와 같을 때, 그 스트링을 결과배열에 추가하고 리턴한다.
    function combinate(string, index) {
        if(index === digits.length) {
            result.push(string);
            return;
        }
        // digits의 인덱스에 해당하는 배열을 순회
        for(let x of map[digits[index]]) {
            // 스트링을 추가해가며 인덱스를 증가한다.
            combinate(string + x, index + 1);
        }
    }
    // 빈 스트링, 0 인덱스에서 시작
    combinate('', 0);
    return result;
};