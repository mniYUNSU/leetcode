/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // 가장 긴 회문 리턴
    // s 를 순회하며 s[i]의 양 옆 s[i-1], s[i+1] 으로 퍼져나가며 회문인지 판단한다.
    let longest = 0;
    let indexes = [];
    
    // left 와 right가 out of bound 가 아니거나, s[left] = s[right] 라면 회문으로 판단
    // 그 때 양 옆 문자 + 현재 기준 문자의 최장 문자열로 길이를 저장한다.
    // 그 때 left, right 값도 저장한다.
    // left를 왼쪽으로 보내기 위해 -1씩, right는 +1씩 증가시킨다.
    const findLongestPalindrome = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) { 
            // 최장 문자열보다 큰 값이라면 재할당한다.
            if (right - left + 1 > longest) { 
                longest = right - left + 1; 
                indexes = [left, right]; 
            };
            left--; 
            right++; 
        };
    };

    for (let i = 0; i < s.length; i++) { 
        // 하나의 기준 문자로 회문판단
        findLongestPalindrome(i, i); 
        // 기준 문자 옆에 같은 문자가 존재할 경우가 있음
        // 기준 문자를 두 문자로 묶어 회문 판단 시작
        findLongestPalindrome(i, i + 1);
    };

    // s의 부분 문자열을 저장된 왼쪽, 오른쪽 인덱스로 잘라 리턴한다.
    const [left, right] = indexes;
    return s.substring(left, right + 1);
};