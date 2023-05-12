/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(questions) {
    // 점수의 최대값 리턴    
    // 각 인덱스마다 발생할 경우의 수 - 풀거나, 스킵하거나
    // bp 가 0보다 클땐 넘어가고 0일때 풀거나 스킵
    // 이전 값이 풀었으면 brainpower 만큼 스킵
    
    // 각 인덱스에서 계산했던 값들 메모
    // 베이스 케이스는 마지막 문제로 출발한다.
    // 배열의 끝부터 출발하여 풀었을때, 스킵했을때 각각 경우의 최대값을 저장한다.
    
    // zero-one knapsack DP
    let dp = {};
    
    for (let i = questions.length - 1; i >= 0; i--) {
        let solve = questions[i][0] + (dp[i+1+questions[i][1]] || 0);
        let skip = dp[i+1] || 0;
        dp[i] = Math.max(solve, skip);
        
        // [[1,1],[2,2],[3,3],[4,4],[5,5]]
        // [ , , , , 5]
        // [ , , , 5, 5]
        // [ , , 5, 5, 5]
        // [ , 7, 5, 5, 5]
        // [7, 7, 5, 5, 5]
    }
    
    return dp[0];    
};