/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    // 가장 짧은 clear path 리턴, 없으면 -1
    // 그리드 좌측 최상단에서 시작(0,0)하여 우측 최하단 (n-1,n-1)까지 거리
    // 인접한 셀은 8방향으로 인접함
    // 방문한 셀은 0
    
    // 현재 셀이 0이면 인접한 8방향 셀이 0인지 판단
    // 인접한 셀이 0이면 그 셀에서 다시 8방향 판단

    // 0,0 과 n-1,n-1 이 0이 아니면 clear path가 아니므로 -1 리턴
    if (grid[0][0] !== 0) return -1;
    // 8방향을 나타낼 x,y 좌표
    const dRow = [0, 0, 1, 1, 1, -1, -1, -1];
    const dCol = [-1, 1, 0, 1, -1, 0, 1, -1];
    const n = grid.length;
    
    // bfs 적용을 위한 queue
    const queue = [[0, 0, 1]]; // row, col, path
    
    // bfs
    while (queue.length) {
        const [row, col, path] = queue.shift();
        
        // row와 col이 그리드의 우측 최하단에 도달하면 path 리턴
        if (row === n - 1 && col === n - 1) return path;
        
        // 8방향을 돌며 유효한 셀이라면 큐에 넣는다.
        // 방문한 셀을 1로 변경
        for (let i = 0; i < dRow.length; i++) {
            let nextRow = row + dRow[i];
            let nextCol = col + dCol[i];
            // 그리드를 벗어나거나, 0이 아니라면 다음 방향 검증
            if (nextRow < 0 || nextCol < 0 || nextRow >= n || nextCol >= n || grid[nextRow][nextCol] !== 0) continue;
            
            queue.push([nextRow, nextCol, path + 1]);
            grid[nextRow][nextCol] = 1;
        }
    }
    return -1;
};