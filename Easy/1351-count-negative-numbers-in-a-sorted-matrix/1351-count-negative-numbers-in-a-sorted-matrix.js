/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    // 2차원 배열에서 음의 값을 카운트하여 리턴
    // grid[i][j] 값이 0보다 작으면 그 뒤에 수도 음수이므로
    // grid[i].length - j 값을 카운트에 더하고 다음 반복으로 넘어간다.
    let count = 0;
    const length = grid[0].length;
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < length; j++) {
            if (grid[i][j] < 0) {
                count += length - j;
                break;
            }
        }
    }
    return count;
};