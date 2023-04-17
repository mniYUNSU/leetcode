/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    // 오름차순으로 정렬된 numbers
    // 두 요소를 덧셈 했을 때 target 과 일치하는 인덱스의 배열을 리턴
    
    // 이중 반복문을 사용한다.
    // i + j 값이 target 보다 크면 j 반복 중단하고 i를 1 증가하여 다시 시작한다.
    
    // for (let i = 0; i < numbers.length; i++) {
    //     for (let j = i + 1; j < numbers.length; j++) {
    //         if (numbers[i] + numbers[j] === target) {
    //             return [i + 1, j + 1];
    //         }
    //         if (numbers[i] + numbers[j] > target) {
    //             break;
    //         }
    //     }
    // }
    
    // 테스트는 통과했으나 시간이 초과됨
    
    
    // 양 끝에서 시작하는 두 포인터 사용
    let start = 0, end = numbers.length - 1;
    
    while (start < end) {
        if (numbers[start] + numbers[end] === target) return [start + 1, end + 1];
        if (numbers[start] + numbers[end] > target) {
            end--;
        } else {
            start++;
        }
    }
};