/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    // matrix의 대각선 요소들의 합
    // 중복 허용 x
    
    // 리턴할 결과값 변수와 반대쪽 대각선 인덱스가 될 변수
    let sum = 0;
    let secondary = mat.length - 1;
    
    // matrix를 순회하며 mat[i][j] 를 sum에 더해나간다.
    // 중복될 경우 (i === secondary)가 아니면 반대쪽 요소도 더한다.
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