/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // [1,4,6,0,0,0] , [2,3,8]
    // 수정된 nums1이 결과이며, void 를 리턴해야 함
    // m + n 이 nums1의 길이, n이 0이 되기 전 까지 반복
    // num1, nums2 는 이미 정렬되어 있다.
    // nums1과 nums2 의 마지막 인덱스부터 크기를 비교한다.
    // nums2[n-1] 값이 nums1[m-1] 값 보다 크면
    // nums1[m+n-1] 값이 nums2[n-1]이 된다. 이후 n과 m+n 값을 감산한다.
    let length = m + n; // 6
    while(n > 0) { 
        // 6 > 3 -> [1,4,6,0,6,8] , length = 4, m = 2
        // 4 > 3 -> [1,4,6,4,6,8] , length = 3, m = 1
        if (nums1[m-1] > nums2[n-1]) {
            nums1[length-1] = nums1[m-1];
            m--;
        } 
        // 8 > 6 -> [1,4,6,0,0,8] , length = 5, n = 2
        // 3 > 1 -> [1,4,3,4,6,8] , length = 2, n = 1
        // 2 > 1 -> [1,2,3,4,6,8] , length = 1, n = 0 -> 반복 끝
        else {
            nums1[length-1] = nums2[n-1];
            n--;
        }
        length--;
    }
};