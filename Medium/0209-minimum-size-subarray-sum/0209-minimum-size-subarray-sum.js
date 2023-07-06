/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    // 양수로 구성된 nums
    // 더했을 때 target 과 일치하는 가장 적은 사이즈 리턴
    
    // start, end 투 포인터 사용
    // end를 1씩 늘려가며 sum을 업데이트한다
    // sum이 target과 같거나 더 커진다면
    // result의 최소값을 업데이트한다
    // start를 늘린다.
    
    let start = 0, end = 0, sum = 0, result = Infinity;
    
    for (end = 0; end < nums.length; end++) {
        sum += nums[end];
        
        while (sum >= target) {
            result = Math.min(result, end - start + 1);
            sum -= nums[start];
            start++;
        }
    }
    return result === Infinity ? 0 : result;
};