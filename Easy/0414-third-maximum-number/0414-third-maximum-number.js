/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    // 3번째로 큰 수를 리턴
    // 없다면 가장 큰 수 리턴
    // 값이 음수도 포함되므로, first, second, third 변수에 최초로 -infinity 할당
    // first < nums[i] 라면, first = nums[i] 가 되며, second 는 first가 됨
    // second < nums[i] --> second = nums[i] , third = second
    // third < nums[i] --> third = nums[i]
    // third 가 -infinity 인 경우 -> nums element가 3개보다 적거나 중복되는 수가 있음 ==> first 리턴
    
    let first = -Infinity, second = -Infinity, third = -Infinity;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === first || nums[i] === second || nums[i] === third) continue;
        if (nums[i] > first) {
            let memo = first;
            first = nums[i];
            let memo2 = second;
            second = memo;
            third = memo2;
        } else if (nums[i] > second) {
            let memo = second;
            second = nums[i];
            third = memo;
        } else if (nums[i] > third) {
            third = nums[i];
        }
    }
    return third === -Infinity ? first : third;    
};