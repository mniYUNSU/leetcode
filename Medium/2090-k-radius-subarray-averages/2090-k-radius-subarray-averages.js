/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {
    // i - k 부터 i + k 까지의 합의 평균 구하기
    // out of bound 라면 -1
    // 합의 평균을 구하고, 다음 인덱스에선 첫번째 인덱스값을 빼고 마지막 인덱스 값을 추가하여 평균 연산
    
    if (k === 0) return nums;
    
    const length = nums.length, twoK = 2 * k, size = twoK + 1;
    let result = new Array(length).fill(-1);
    
    let sum = 0;
    for (let i = 0; i < length; i++) {
        sum += nums[i];
        if (i >= twoK) {
            result[i - k] = Math.floor(sum / size);
            sum -= nums[i - twoK];
        };
    };
    
    return result;
};