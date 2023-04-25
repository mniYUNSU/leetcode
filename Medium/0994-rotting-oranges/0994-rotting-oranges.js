/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    // 0 - 비어있음
    // 1 - 신선한 오렌지
    // 2 - 썩은 오렌지
    // 1분마다 상하좌우에 썩은 오렌지가 있다면 신선한 오렌지가 썩는다
    // 전부 썩는 시간의 최솟값 (신선한 오렌지가 존재한다면 -1 리턴)
    
    // 상한 오렌지의 좌표를 큐에 저장한다.
    // 상한 오렌지의 상하좌우에 신선한 오렌지가 있는지 판단한다.
    // 없다면 -1 리턴
    // 있다면 +1 씩 카운트를 늘린다.
    
    // 동떨어진 신선한 오렌지가 있다면 -1을 리턴해야한다. 신선한 오렌지의 좌표도 기억해둔다.
    
    const directions = [[-1,0], [1,0], [0,-1], [0,1]];
    let minute = 0;
    let rotten = [], fresh = 0;
    const row = grid.length, col = grid[0].length;
    
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            let orange = grid[i][j];
            if (orange === 1) {
                fresh++;
            } 
            if (orange === 2) {
                rotten.push([i,j]);
            }
        }
    }
    
    while (rotten.length) {
        const length = rotten.length;
        for (let i = 0; i < length; i++) {
            const [x, y] = rotten.shift();
            
            if (x-1 >= 0 && grid[x-1][y] === 1) {
                grid[x-1][y] = 2;
                fresh--;
                rotten.push([x-1,y]);
            }
            if (x+1 < row && grid[x+1][y] === 1) {
                grid[x+1][y] = 2;
                fresh--;
                rotten.push([x+1,y]);
            }
            if (y-1 >= 0 && grid[x][y-1] === 1) {
                grid[x][y-1] = 2;
                fresh--;
                rotten.push([x,y-1]);
            }
            if (y+1 < col && grid[x][y+1] === 1) {
                grid[x][y+1] = 2;
                fresh--;
                rotten.push([x,y+1]);
            }
        }
        if (rotten.length > 0) minute++;
    }
    
    return fresh === 0 ? minute : -1;
};