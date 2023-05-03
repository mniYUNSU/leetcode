/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    // nums element 를 전부 곱한 값을 singFunc 파라미터로 넣어 리턴
    let product = 1;
    for (let i = 0; i < nums.length; i++) {
        product *= nums[i];
    }
    return signFunc(product);
};

const signFunc = (x) => {
    if (x > 0) return 1;
    if (x < 0) return -1;
    return 0;
}