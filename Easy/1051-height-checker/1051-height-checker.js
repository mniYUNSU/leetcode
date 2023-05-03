/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    // heights element 들이 오름차순 정렬되어 있지 않은 카운트 리턴
    // heights를 정렬한다.
    // heights 를 순회한다.
    // 정렬한 값과 일치하지 않으면 count + 1
    
    let count = 0;
    let sorted = [...heights].sort((a,b) => a-b);
    
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== sorted[i]) count++;
    }
    return count;
};