/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // 고유한 수 변수 생성
    let uniqNum = 0;
    // 배열 전체 순회
    for (let idx = 0; idx < nums.length; idx++) {
        // ^ : 서로 값이 다를때 true, 같을 때 false를 리턴함
        uniqNum = uniqNum ^ nums[idx];
    } 
    return uniqNum;       
};