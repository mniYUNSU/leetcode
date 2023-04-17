/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // k 만큼 nums 를 오른쪽으로 이동
    // k 가 nums.length 보다 크면 결국 한 사이클이 돌아 똑같은 num 가 나오게 된다.
    // 불필요한 반복을 방지하기 위해 k 를 재할당 한다.
    // 순서를 옮길때 인덱스를 초과하는 요소를 떼어내고 맨 앞에 붙인다.
    
    k = k % nums.length;
    let overLengthArray = nums.splice(nums.length - k);
    
    nums.splice(0,0,...overLengthArray);  
};