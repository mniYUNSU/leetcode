/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    // nums의 한 엘리먼트를 뺐을 때, 연속되는 1이 가장 큰 사이즈를 리턴
    
    // 배열의 길이를 위한 left, right 포인터 생성
    // nums[r] 이 1이거나, 인덱스를 삭제하지 않은 경우
    // 인덱스를 삭제하지 않은 경우인데 nums[r] 이 0이면 삭제했다고 업데이트
    // 최대값을 업데이트하고 right를 증가한다.
    // 그 외에 경우엔 삭제했음을 false로 초기화하고 left를 늘린다.
    
    let maxLength = 0, left = 0, right = 0, isDeleted = 0;
    
    while(right < nums.length) {
        if(nums[right] === 1 || isDeleted === 0) {
            if(nums[right] === 0) isDeleted = 1;
            maxLength = Math.max(maxLength, right - left + 1 - isDeleted);
            right++;
        } else {
            if(nums[left] === 0) isDeleted = 0;
            left++;
        }
    }

    return maxLength === nums.length ? maxLength - 1 : maxLength;
};