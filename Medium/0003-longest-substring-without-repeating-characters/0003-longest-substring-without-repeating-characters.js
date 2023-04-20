/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // set 자료구조 활용하여 중복 알파벳 탐지
    // s를 순회하며 set에 중복되는 알파벳이 나온다면
    // 먼저 나온 알파벳부터 중복되는 알파벳이 존재하지 않을 때 까지 삭제 (loop + 조건)
    // 삭제할 때마다 포인터 1 증가 (어디서부터 substring을 다시 만들고 있는지 알기 위해)
    let length = 0, left = 0;
    let set = new Set();

    // pwwkew
    for (let i = 0; i < s.length; i++) {
        // set {'p','w'}
        // {} left 1 2
        // {'w','k','e'}
        // {'k', 'e', 'w'} left 3
        while (set.has(s[i])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[i]);
        length = Math.max(length, set.size)
    }
    return length;
};