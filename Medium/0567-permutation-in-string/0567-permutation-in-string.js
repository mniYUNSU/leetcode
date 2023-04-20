/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    // s1 길이 > s2 이면 무조건 false
    if (s1.length > s2.length) return false;
    
    // 알파벳 26글자 -> 길이 26의 배열을 만들고 알파벳의 순서에 대응하는 인덱스에 + 1
    let alpArray = new Array(26).fill(0);
    for (let i = 0; i < s1.length; i++) {
        alpArray[s1[i].charCodeAt(0) - 97]++;    
    }
    
    // 순열을 포함하고 있는 경우 - 알파벳 배열이 모두 0인 경우 (s1의 글자들을 다 사용했다)
    const isPermutation = () => {
        return alpArray.every((element) => element === 0);
    }
    
    // s2를 순회하며 알파벳 인덱스 카운트 - 1
    // ab, dcaabe
    // [1,1,0,0,0,...]
    // [1,1,0,-1,0...]
    // [1,1,-1,-1,0...]
    // [0,1,-1,-1,0...]
    // [0,1,-1,-1,0...]
    // [0,0,0,-1,0...]
    for (let j = 0; j < s2.length; j++) {
        alpArray[s2[j].charCodeAt(0) - 97]--;
        
        if (j >= s1.length) {
            alpArray[s2[j - s1.length].charCodeAt(0) - 97]++;
        }
        
        if (isPermutation()) return true;
    }
    
    return false;
};