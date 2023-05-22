/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function(grid) {
    // grid는 2개의 섬을 갖고있다.
    // 2개의 섬을 나타낼 배열을 만든다.
    let firstIsland = [], secondIsland = [];
    
    // 섬이라면 푸시한다.
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            // 첫번째 섬을 만든 후 두번째 섬을 만든다.
            if (grid[i][j] === 1) {
                if (firstIsland.length === 0) {
                    dfs(i, j, firstIsland, grid);
                } else if (secondIsland.length === 0) {
                    dfs(i, j, secondIsland, grid);
                }
            }
        }
    }
    
    return getMinimumValue(firstIsland, secondIsland);
};


const dfs = function (i, j, island, grid) {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] !== 1) return;
    // 방문 체크
    grid[i][j] = 0;
    island.push([i, j]);
    
    dfs(i+1, j, island, grid);
    dfs(i-1, j, island, grid);
    dfs(i, j+1, island, grid);
    dfs(i, j-1, island, grid);
};

const getMinimumValue = function (firstIsland, secondIsland) {
    // 4방향 기준 두 섬이 얼마나 떨어졌는지 확인하는 방법
    // i 인덱스 끼리 뺀 값의 절대값 - 세로 방향으로 얼마나 떨어져 있는지
    // j 인덱스 끼리 뺀 값의 절대값 - 가로 방향으로 얼마나 떨어져 있는지
    // 두 값을 더하고 1을 뺀다. 1을 빼는 이유는 섬을 포함해버리기 때문.
    
    let outerArray = secondIsland, innerArray = firstIsland;
    if (firstIsland.length > secondIsland.length) {
        outerArray = firstIsland;
        innerArray = secondIsland;
    }
    
    let value = Infinity;
    for (let i = 0; i < outerArray.length; i++) {
        for (let j = 0; j < innerArray.length; j++) {
            let distance = Math.abs(outerArray[i][0] - innerArray[j][0]) + Math.abs(outerArray[i][1] - innerArray[j][1]) - 1;
            value = Math.min(value, distance);
        }
    }
    return value;
};