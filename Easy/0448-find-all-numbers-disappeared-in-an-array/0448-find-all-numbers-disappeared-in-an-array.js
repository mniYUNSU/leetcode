/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    // n = nums.length 이며 1 <= nums[i] <= n 이다.
    // nums 에 존재하는 값들과 중복되는 값들을 제거하는 로직
    // nums[i] 는 1 이상 n 이하이다. nums[i] 가 nums에 존재하므로 nums 배열의 i번째 인덱스에 null 할당한다.
    // nums[i] 에는 null이 되기 전 값을 할당한다.
    // nums[i] 값의 인덱스 값이 null 이라면 i+1 을 할당하고 i를 증가시킨다.
    // nums[i] 값이 null 이라면 i+1 증가시킨다. 이미 중복으로 제거되었으므로 반복을 재개한다.
    // i 값이 nums.length -1 이 된다면 반복을 종료한다.
    // 수정된 nums 배열에서 null 을 제외한 배열을 리턴한다.
   
    let index = 0;
    while (index < nums.length) {
        if (nums[index] === undefined) {
            index++;
            continue;
        }
        const target = nums[index] - 1;
        if (nums[target] === undefined) {
            nums[index] = index + 1;
            index++;
        }
        else {
            nums[index] = nums[target];    
            nums[target] = undefined;
        }
    }
    return nums.filter((element) => element !== undefined);
};