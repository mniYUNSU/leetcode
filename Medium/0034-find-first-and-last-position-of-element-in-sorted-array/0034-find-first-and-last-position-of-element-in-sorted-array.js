/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    // 정렬된 nums
    // nums 의 target 값의 시작인덱스와 마지막 인덱스를 리턴
    // O(log n) => 바이너리 서치
    // 바이너리 서치를 통해 start,end 구한다. 
    // 바운드를 벗어난 경우 [-1, -1] 리턴
    
    let result = [-1, -1];
    let left = 0, right = nums.length - 1;
    
    while (left < right) {
        // 중간 인덱스를 찾는다.
        let mid = Math.floor((left + right) / 2);
        // 타겟보다 값이 작으면 left 값을 중간 인덱스 보다 1 큰 값으로 땡긴다.
        if (nums[mid] < target) {
            left = mid + 1;
        } 
        // 중간 값이 더 크거나 같으면 right 값을 중간 인덱스로 땡긴다.
        else {
            right = mid;
        }
    }
    
    // 첫번째 루프를 마친 이후, 시작 인덱스 값이 target과 일치하지 않는다면 nums 에 타겟은 없다는 뜻
    // 즉 [-1, -1] 리턴
    if (nums[left] !== target) return [-1, -1];
    
    // 위 조건을 모두 통과했다면 start 인덱스값을 확보한 상태이므로 저장해둔다.
    // right 값을 알아내기 위해 right 값을 초기화한다.
    let start = left;
    right = nums.length - 1;
    
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        // 중간값이 타겟보다 작거나 같은 경우 left를 중간 인덱스 + 1 으로 땡김
        if (nums[mid] <= target) {
            left = mid + 1;
        } 
        // 중간값이 타겟보다 크면 right를 중간 인덱스로 땡긴다.
        else {
            right = mid;
        }
    }
    // 두번째 루프를 통해 알게되는 것은 nums[left] 는 target이 위치할 수 있는 가장 끝 값이라는 것
    // nums[left] 가 target과 일치하지 않다면?
    // 그 이전 인덱스가 target과 일치한 값이 된다.
    let end = nums[left] === target ? left : left - 1;
    
    return [start, end]; 
};