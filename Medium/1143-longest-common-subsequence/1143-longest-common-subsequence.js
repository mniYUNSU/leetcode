/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    // text1, text2 길이 비교
    // dp
    const m = text1.length, n = text2.length;
    // edge case 를 위해 m+1, n+1로 dp 배열 생성
    let dp = new Array(m+1).fill().map(() => new Array(n+1).fill(0));
    
    // text1, text2를 순회하며 dp 업데이트
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // 두 문자가 동일한 문자라면 길이를 1 증가시킨다.
            if (text1[i-1] === text2[j-1]) {
                dp[i][j] = 1 + dp[i-1][j-1];
            }
            // 다른 경우, 현재 dp 에서 이전값들의 최대값을 취한다.
            // dp grid에서 업데이트할 위치의 이전값은 위로 한칸, 왼쪽으로 한칸의 값
            else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }
    // dp 업데이트 후 마지막 인덱스를 리턴한다.
    return dp[m][n];    
};