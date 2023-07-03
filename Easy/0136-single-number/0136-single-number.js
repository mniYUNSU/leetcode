/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // 고유한 수 변수 생성
    let uniqNum = 0;
    // 배열 전체 순회
    for (let idx = 0; idx < nums.length; idx++) {
        // ^ : 서로 값이 같으면 0 리턴
        uniqNum = uniqNum ^ nums[idx];
    } 
    return uniqNum;       
};