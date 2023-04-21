/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    // 주어진 2차원 배열의 시작점을 입력받은 컬러로 바꾼다.
    // 컬러로 바꾸고 그 좌표의 상하좌우의 값을 판단한다.
    // 그 값이 1이라면 입력받은 컬러로 바꾼다.
    // 그 좌표의 상하좌우도 판단한다.
    
    // 상 : r-1, c
    // 하 : r+1, c
    // 좌 : r, c-1
    // 우 : r, c+1
    // r,c의 인덱스가 0이거나 r.length-1 이면 리턴
    // r,c의 값이 최초 시작점 컬러가 아니거나 입력받은 color값이면 리턴
    // 시작점의 컬러를 변경하기 전 값을 저장    
    let initValue = image[sr][sc];
    let rowLength = image.length, columnLength = image[0].length;
    // 시작점의 컬러가 입력받은 컬러와 일치한다면 변경할 것이 없으므로 image 리턴
    if (color === initValue) return image;
    // 현재 좌표를 color 로 변경하고 상하좌우를 실행하는 함수를 만든다.
    const recur = (row, column) => {
        if (row < 0 || column < 0) return;
        if (row > rowLength - 1 || column > columnLength -1 ) return;
        if (image[row][column] === color || image[row][column] !== initValue) return;
        
        image[row][column] = color;
        
        recur(row-1, column);
        recur(row+1, column);
        recur(row, column-1);
        recur(row, column+1);
    }
    
    recur(sr,sc);
    return image;
};