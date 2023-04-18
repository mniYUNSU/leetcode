/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // string 의 공백은 유지한 채로 리버스 스트링 리턴
    // ' ' 이 나오기 전 까지의 단어를 앞쪽부터 쌓는다.
    // ' ' 이 나오면 그 단어를 붙이고 초기화한다.
    let result = '', stack = '';
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            result += stack + s[i];
            stack = '';
        } else {
            stack = s[i] + stack;
        }
    }
    
    return result + stack;
};