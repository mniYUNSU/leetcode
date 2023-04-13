/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    // 왼쪽, 오른쪽에서 탐색을 시작
    // 왼쪽의 절대값이 오른쪽의 절대값보다 크면 그 값의 제곱을 오른쪽 인덱스에 할당
    // 할당 후 오른쪽 인덱스값 -1
    // 아니라면 왼쪽 인덱스에 할당
    // 할당 후 왼쪽 인덱스 값 +1
    
    let left = 0, right = nums.length -1;
    let result = new Array(nums.length);
    
    for (let i = nums.length - 1; i >= 0; i--) {
        if (Math.abs(nums[left]) < Math.abs(nums[right])) {
            result[i] = nums[right] ** 2;
            right--;
        } else {
            result[i] = nums[left] ** 2;
            left++;
        }
    }
    return result;
};