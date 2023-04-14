/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // 두개의 포인터 사용
    // 하나는 일반적으로 순회하는 포인터
    // 나머지 하나는 고유한 엘리먼트만 순회하는 포인터
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