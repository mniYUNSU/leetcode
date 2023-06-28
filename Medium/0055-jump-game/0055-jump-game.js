/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // 인덱스 초기값 0 설정
    // target은 nums의 마지막 인덱스
    // max 변수를 만들고 대소비교를 통해 할당한다.
    // 현재 max 값, max 값에 현재 인덱스 값(점프값)을 더한 값 대소비교
    // 인덱스를 1씩 증가시키며 nums를 끝까지 탐색한다.
    
    let index = 0, max = 0, target = nums.length - 1;
    
    while (index <= target) {
        max = Math.max(max, index + nums[index]);
        // 인덱스 최대값이 target 보다 이상이면 무조건 true
        if (max >= target) return true;
        // 최대값보다 인덱스가 같거나 클 때 & 현재 인덱스 값이 0 이면 점프할 수 없으므로 false
        if (max <= index && nums[index] === 0) return false;
        index++;
    }
    return false;
};