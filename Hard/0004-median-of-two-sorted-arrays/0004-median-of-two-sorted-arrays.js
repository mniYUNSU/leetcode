/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // 파라미터 : 정렬된 숫자 배열 2개
    // 두 배열을 합치고 소팅하여 중앙값 리턴
    // 엘리먼트가 짝수개라면 중앙 2개 더한 값 / 2 리턴
    // 홀수라면 가운데 값 리턴
    // 제약 : 시간복잡도 O(log(m+n)) , log(m+n) 은 즉 바이너리 서치이다
   
    if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);
    
    let total = nums1.length + nums2.length;
    let half = Math.floor(total / 2);
    
    let left = 0, right = nums1.length;
    
    while (left <= right) {
        i = Math.floor((left + right) / 2);
        j = half - i;
        
        let left1 = i > 0 ? nums1[i-1] : -Infinity
        let right1 = i < nums1.length ? nums1[i] : Infinity;
        let left2 = j > 0 ? nums2[j-1] : -Infinity;
        let right2 = j < nums2.length ? nums2[j] : Infinity;
        
        if (left1 <= right2 && left2 <= right1) {
            if (total % 2 !== 0) {
                return Math.min(right1, right2);
            } else {
                return (Math.max(left1, left2) + Math.min(right1, right2)) / 2;
            }
        } else if (left1 > right2) {
            right = i - 1;
        } else {
            left = i + 1;
        }
    }
};