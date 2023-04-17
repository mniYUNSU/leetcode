/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // 포인터 사용

    // 포인터는 nums[i] 가 0이 아닐때에만 카운트한다.
    // 0을 만날 땐 아무 행동을 하지 않음
    // 0이 아닌 값을 만날땐 카운팅된 포인터 값과 현재 인덱스와 값을 바꿔야 한다.
    let pointer = 0;
    // [1,2,0,3,0,4] 0
    // [1,2,0,3,0,4] 1
    // [1,2,0,3,0,4] 2
    // [1,2,0,3,0,4] 2
    // [1,2,3,0,0,4] 3
    // [1,2,3,4,0,0] 4
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            let memo = nums[pointer];
            nums[pointer] = nums[i];
            nums[i] = memo;
            pointer++;
        }
    }
};