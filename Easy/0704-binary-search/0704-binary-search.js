/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // 배열을 왼쪽, 오른쪽 반으로 나눔
    // 배열의 가운데 요소가 타겟보다 크면 
    // 배열의 왼쪽 요소를 날린다
    // 날린 배열을 다시 반으로 나눈다
    // 가운데 요소가 타겟보다 작으면 오른쪽을 나눈다
    
    let left = 0, right = nums.length - 1;
    let half = Math.floor(nums.length / 2);
    
    while (left <= right) {
        if (nums[half] === target) return half;
        if (nums[half] > target) {
            right = half - 1;
        } else {
            left = half + 1;
        }
        half = Math.floor((left + right) / 2);
    }
    return -1;
};