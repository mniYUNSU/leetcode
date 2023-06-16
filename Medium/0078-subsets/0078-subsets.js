/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    // nums 의 모든 조합을 리턴한다.
    // 결과를 리턴할 배열을 만든다.
    const result = [];
    
    // 재귀를 수행할 함수를 만든다.
    // 파라미터로 현재 조합과 인덱스를 받는다.
    // 현재 조합을 결과 배열에 넣고, 반복 수행
    // 현재 조합 + nums[i], 다음 인덱스 를 인자로 넣고 재귀 수행
    const recur = (path, index) => {
        result.push(path);
        for (let i = index; i < nums.length; i++) {
            recur([...path, nums[i]], i + 1);
        }
    }
    
    // 최초 조합으로 빈배열과 0 인덱스를 넣는다.
    recur([], 0);
    return result;
};