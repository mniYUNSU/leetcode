/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    // 짝수 element 를 array 첫 부분으로 옮겨야 함
    // 짝수가 아닌 위치를 가리키는 포인터 사용
    // 짝수라면 포인터의 위치와 현재 위치를 변경한다.
    
    let pointer = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            let memo = nums[i];
            nums[i] = nums[pointer];
            nums[pointer] = memo;
            pointer++;
        }
    }
    return nums;
};