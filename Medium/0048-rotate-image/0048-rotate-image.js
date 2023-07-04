/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    // matrix 시계방향으로 90도 회전
    
    // matrix[]를 뒤집는다.
    // 뒤집은 후 matrix[i][j] 를 matrix[j][i] 로 뒤집는다. 대각선 대치
    
    const size = matrix.length;
    if (size < 2) return matrix;
    
    let start = 0, end = size - 1;
    
    // matrix 뒤집기
    while (start < end) {
        [matrix[start], matrix[end]] = [matrix[end], matrix[start]];
        start++;
        end--;
    }
    
    // 대각선으로 뒤집기
    for (let i = 0; i < size; i++) {
        for (let j = i + 1; j < size; j++) {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    return matrix;
};