/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    // 0 : red
    // 1 : white
    // 2 : blue
    // red - white - blue 순으로 정렬
    // nums의 첫번째, 마지막을 포인터로 설정
    let start = 0, end = nums.length - 1;
    
    // nums 를 순회하며 nums[i] 가 0 이거나 2이면 현재 위치와 바꾼다
    for (let i = 0; i <= end; i++) {
        const current = nums[i];
        if (nums[i] === 0) {
            const prev = nums[start];
            nums[start] = current;
            nums[i] = prev;
            start++;
        } else if (nums[i] === 2) {
            const prev = nums[end];
            console.log(current,prev)
            nums[end] = current;
            nums[i] = prev;
            i--;
            end--;
        }
    }
    
    console.log(nums)
};