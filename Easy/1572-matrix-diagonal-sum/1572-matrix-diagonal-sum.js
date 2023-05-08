/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    // matrix의 대각선 요소들의 합
    // 중복 허용 x
    
    // 리턴할 결과값 변수
    let sum = 0;
    let secondary = mat.length - 1;
    
    // matrix를 순회하며 mat[i][j] 를 sum에 더해나간다.
    // 중복을 방지하기 위해 더한 요소는 0으로 바꾼다.
    for (let i = 0; i < mat.length; i++) {
        if (i !== secondary) {
            sum += mat[i][i] + mat[i][secondary];
        } else {
            sum += mat[i][i];
        }
        secondary--;
    }
    return sum;
};