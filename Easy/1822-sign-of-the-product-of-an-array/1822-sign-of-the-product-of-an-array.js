/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    // nums element 를 전부 곱한 값을 singFunc 파라미터로 넣어 리턴
    // 전부 곱하여 판단할 수 있지만 다른 방법이 있다.
    // element 가 0 이면 곱한 값은 무조건 0 이므로 0 리턴
    // 음수 값의 갯수가 짝수라면 무조건 곱한 값은 양수이므로 1 리턴
    // 그 외엔 -1 리턴
    let negative = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) return 0;
        if (nums[i] < 0) {
            negative++;
        }
    }
    return negative % 2 === 0 ? 1 : -1;
};
