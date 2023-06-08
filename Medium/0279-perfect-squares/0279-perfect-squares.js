/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    // 완전제곱수끼리 더하여 n 이 나오는 최소값 리턴
    // n 의 square root가 정수이면 그 수는 완전제곱수이다.
    // 0부터 n까지의 수 마다 완전제곱수로 표현할 최소 개수를 저장한다.
    
    if (Math.sqrt(n) % 1 === 0) return 1;
    
    const dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0;
    
    for (let i = 1; i <= n; i++) {
        let p = 1;
        while (p*p <= i) {
            dp[i] = Math.min(dp[i], dp[i - p*p] + 1);
            p++;
        }
    }
    return dp[n];
};