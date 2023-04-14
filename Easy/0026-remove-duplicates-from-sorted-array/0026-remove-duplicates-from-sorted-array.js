/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // 두개의 포인터 사용
    // 하나는 일반적으로 순회하는 포인터
    // 나머지 하나는 고유한 엘리먼트만 순회하는 포인터
    
    // nums를 0부터 끝까지 하나씩 탐색한다.
    // nums[current] 와 nums[unique] 가 다른 경우, 중복된 엘리먼트를 현재 엘리먼트로 바꾼다. 고유한 엘리먼트의 인덱스를 증가한다.
    // 같은 경우라면 다음 인덱스로 넘어간다.
    // 반복이 종료되면 고유한 값을 리턴한다. 초기값을 0으로 했으므로 리턴할 때 1을 더한다.
    let current = 0, unique = 0;
    
    while (current < nums.length) {
        if (nums[current] !== nums[unique]) {
            nums[unique+1] = nums[current];
            unique++;
        }
        current++;
    }
    return unique+1;
};