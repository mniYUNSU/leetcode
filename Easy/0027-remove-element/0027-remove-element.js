/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let left = 0, right = nums.length - 1;
    
    // nums[left] 값이 val 과 일치하면 nums[left] 에 nums[right] 할당후 right--
    // 아니라면 left ++
    // [0,1,2,2,3,0,4,2] val = 2
    // 0 !== 2 -> left : 1 , right : 8
    // 1 !== 2 -> left : 2 , right : 8
    // 2 === 2 -> [0,1,2,2,3,0,4,2] left : 2 , right : 7
    // 2 === 2 -> [0,1,4,2,3,0,4,2] left : 2 , right : 6
    // 4 !== 2 -> left : 3 , right : 6
    // 2 === 2 -> [0,1,4,0,3,0,4,2] left : 3 , right : 5
    // 0 !== 2 -> left : 4 , right : 5
    // 3 !== 2 -> left : 5 , right : 5
    // left , right 가 같아지는 시점은 즉 nums 의 모든 값들을 탐색했다는 뜻이므로 반복 종료
    
    while (left <= right) {
        if (nums[left] === val) {
            nums[left] = nums[right];
            right--;
        }
        else {
            left++;
        }
    }
    
    return left;
};