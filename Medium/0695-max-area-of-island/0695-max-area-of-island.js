/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    // 현재 위치가 1이고 상하좌우 1로 연결된 곳이 land
    // 가장 큰 land 의 크기 리턴
    
    // 상하좌우가 1인지 판단하여 1이면 땅 크기를 + 1 하는 재귀함수 만든다.
    // 재귀 종료 조건 - 현재 좌표 값이 0 인 경우, 좌표값이 -1이거나 땅 크기를 초과할 때, 이미 판단한 좌표인 경우
    let rowLength = grid.length, columnLength = grid[0].length;
    let result = 0, currentArea = 0;
    
    const recur = (row, column) => {
        if (row < 0 || column < 0) return;
        if (row >= rowLength || column >= columnLength) return;
        if (grid[row][column] !== 1) return;
        
        // 이미 판단한 좌표임을 기억하기 위해 2로 변경
        grid[row][column] = 2;
        currentArea++;
        recur(row-1, column);
        recur(row+1, column);
        recur(row, column-1);
        recur(row, column+1);
    }
    
    
    for(let i = 0; i < rowLength; i++) {
        for (let j = 0; j < columnLength; j++) {
            if (grid[i][j] === 0) continue; 
            else {
                recur(i,j);
                result = Math.max(result, currentArea);
                currentArea = 0;
            }
        }
    }
    
    return result;
};