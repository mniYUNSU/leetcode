/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // 가장 많은 물을 담을 수 있는 컨테이너의 넓이 리턴
    
    // 양 끝에서 시작하는 두 포인터를 만든다.
    // 현재 위치에서 너비를 구한다.
    // 포인터 둘 중 높이가 작은 곳의 포인터를 1 이동시키고 다시 너비를 구한다.
    let area = 0, left = 0, right = height.length - 1;
    
    while (left < right) {
        let shortHeight = Math.min(height[left], height[right]);
        area = Math.max(area, shortHeight * Math.abs(left - right));
        
        if (height[left] < height[right]) {
            left++;
        } else {
            right --;
        }
    }
    
    return area;
};