/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    // 1. 결과를 리턴할 빈 배열 생성
    // 2. 중복 방지를 방문한 인덱스를 기억할 배열 생성
    // 3. 방문한 인덱스 배열이 nums.length 와 같다면 모두 방문했으므로 결과 배열에 넣고 리턴
    // 4. 같지 않다면
    // 5. 현재 값이 방문한 배열에 존재하는지 확인한다.
    // 6. 없다면 방문 배열에 넣고 다시 실행한다.
    // 7. 있다면 다음 반복수행
    
    let result = [];
    
    const permutation = (array) => {
        if (array.length === nums.length) {
            result.push(array);
            return;
        }
        
        for (let i = 0; i < nums.length; i++) {
            if (!array.includes(nums[i])) {
                permutation([...array, nums[i]]);
            }
        }
    }
    
    permutation([]);
    return result;
};