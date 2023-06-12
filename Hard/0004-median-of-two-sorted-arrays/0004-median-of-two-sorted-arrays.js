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
    
    // 합친 배열을 왼쪽, 오른쪽의 사이즈가 같도록 양분한다.
    // 그 사잇값이 중앙값이 될 수 있음.
    // 합친 배열의 사이즈가 짝수라면,
    // 왼쪽 오른쪽 양분했을 때 중앙값은 왼쪽의 마지막값과 오른쪽의 첫번째 값의 절반이다.
    // 합친 배열 사이즈의 약 절반이 왼쪽, 오른쪽으로 나눌 때의 적절한 사이즈가 됨 
    // 합친 배열의 사이즈의 절반에서 nums1, nums2 중 작은 사이즈의 절반 값을 빼면
    // nums1, nums2 중 긴 배열의 왼쪽 사이즈가 된다.
    // 각 배열의 왼쪽 사이즈 마지막 값은 상대 배열의 오른쪽 첫번째 값 보다 작아야 한다.
    // 만족하지 않다면 left 인덱스 값을 중간값으로 옮겨 다시 사이즈를 계산한다.
    // 계산된 사이즈와 합친 배열의 중앙 값의 차를 계산하여 상대 배열에도 동일하게 적용한다.
    // 올바르게 분할되었다면 각 배열의 왼쪽 사이즈의 가장 오른쪽의 있는 값들의 대소를 비교한다.
    // 큰 값이 왼편의 최댓값이 되고, 이는 합친 배열의 중앙값이거나 중앙값 중 하나가 된다.
    // 마찬가지로 오른편은 각 배열의 오른편의 첫번째 값이 작은 값이 오른 편의 최솟값이 된다.
    // 합친 배열의 사이즈가 짝수라면 이 두 최솟값, 최댓값을 더한 값의 절반을 리턴한다.
    // 엣지케이스 방지를 위해 배열의 양 극단에는 +무한대, -무한대를 가정해야 한다.
    
    
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