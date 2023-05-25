/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    // 수의 합이 타겟과 일치할 때 , result 에 푸시한다.
    // dfs 수행 
    // combination 배열 , 타겟, 현재 인덱스로 수행
    // 다음 실행은 타겟 - 현재 인덱스 밸류 값이 되며, combination 배열에 현재 값이 추가된다.
    // 타겟 값이 음수가 되는 경우 : 매치되는 경우가 없으므로 return, 다음 반복 실행
    let result = [];
    
    const isCombination = (target, comb, index) => {
        if (target < 0) return;
        if (target === 0) {
            result.push(comb);
            return;
        }
        
        for (let i = index; i < candidates.length; i++) {
            isCombination(target - candidates[i], [...comb, candidates[i]], i);
        }
    }
    
    isCombination(target, [], 0);
    return result;
};