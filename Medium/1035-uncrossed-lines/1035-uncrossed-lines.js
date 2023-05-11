/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function(nums1, nums2) {
    // nums1[i] nums2[j] 값이 같을 때 i,j 값을 메모한다
    // 다음 반복에서 nums1[k] nums2[l] 값이 같을 때
    // i < k 이고 j < l 이면 교차하지 않으므로 카운트 + 1
    // j 가 l 보다 크고 i가 k 보다 작으면 교차하는 것이므로 카운트 하지 않음
    // 아니라면 k,l 을 메모한다
    // 카운트의 최대값을 리턴해야하므로 위 로직은 정답이 아님....
    
    
    // Dynamic Programming 을 사용할 수 있다.
    // DP - Longest Common Subsequences 사용 
    // nums1.length + 1 / nums2.length + 1 의 그리드를 사용한다.
    // + 1 한 이유는 nums1[0] === nums2[0] 이 같을 때 엣지케이스 방지를 위함
    // nums1[i] === nums2[j] 라면 현재 그리드 위치의 왼쪽 위 대각선위치 값의 + 1이 된다.
    // 다르다면 현재 그리드 위치의 왼쪽, 위쪽 값의 최대값을 할당한다.
    // 그리드의 가장 오른쪽 아래 위치가 리턴값이 된다. (모든 케이스 검증 완료)
    // 그리드 공간의 최적화를 할 수 있다.
    // 위 조건을 판단할 때 필요한 그리드 위치는 현재 위치, 그리고 그 바로 이전 위치이다. 그 전의 그리드 값들은 필요가 없다.
    // 그러므로 두 어레이만 사용하는 것으로 최적화를 할 수 있다.
    // 이전 값을 저장하는 array, 현재 값을 저장하는 array
    // [1,1,2,1,2]
    // [1,3,2,3,1]
    // [
    //  [0,0,0,0,0,0],
    //  [0,0,0,0,0,0],
    //  [0,0,0,0,0,0],
    //  [0,0,0,0,0,0],
    //  [0,0,0,0,0,0],
    //  [0,0,0,0,0,0],
    // ]
    
    let previous = new Array(nums2.length + 1).fill(0);
    
    for (let i = 0; i < nums1.length; i++) {
        let current = new Array(nums2.length + 1).fill(0);
        
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                current[j+1] = 1 + previous[j];
            } else {
                current[j+1] = Math.max(previous[j+1], current[j]);
            }
        }
        previous = current;
    }
    return previous[nums2.length];
};