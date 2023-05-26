/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
    // 밥과 앨리스 둘다 최적의 플레이를 한다.
    // 앨리스가 낼 수 있는 가장 큰 돌의 갯수 리턴
    // recursive call + min max algo
    
    const length = piles.length;
    const memo = new Map();
    const sums = new Array(length).fill(0);
    
    sums[length - 1] = piles[length - 1];
    // 턴마다 가져갈 수 있는 돌의 총 최대값
    for (let i = length - 2; i >= 0; i--) {
        sums[i] = sums[i + 1] + piles[i];
    }
    
    function minMax(index, M) {
        const key = `${index}-${M}`;
        // 남아있는 piles가 2M 보다 작은 경우 - 전부 가져가면 됨
        if (length - index <= 2*M) return sums[index];
        // 재연산 방지
        if (memo.has(key)) return memo.get(key);
        let result = 0;
        
        for (let i = 1; i <= 2*M; i++) {
            // 앨리스가 하나 가져가면 M 은 Max(1,1)
            // 앨리스가 두개 가져가면 M 은 Max(1,2)
            const newM = Math.max(i,M);
            result = Math.max(result, sums[index] - minMax(index + i, newM));
        }
        
        memo.set(key, result);
        return result;
    }
    
    return minMax(0,1);
};