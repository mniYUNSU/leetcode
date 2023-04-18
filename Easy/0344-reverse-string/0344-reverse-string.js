/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // 리버스한 배열 리턴
    
    // js 내장 함수 사용
    // return s.reverse();
    
    // 내장 함수 미사용
    const reverse = (s) => {
        let start = 0, end = s.length - 1;
        while (start < end) {
            [s[start], s[end]] = [s[end], s[start]];
            start++;
            end--;
        }
        return s;
    }
    return reverse(s);
};