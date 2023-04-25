/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    // 각 셀에서 0과 가장 가까운 1의 거리를 행렬로 리턴
    // bfs 
    // 0 값인 행렬의 위치를 큐에 넣는다.
    // 0이 아니라면 그 위치에 -1을 넣는다.
    // 큐에서 하나씩 뽑아 행렬의 상하좌우 인접 위치를 탐색한다.
    // 0이 아니라면 시작점에서 + 1 값으로 수정한다.
    
    const row = mat.length;
    const col = mat[0].length;
    let queue = [];
    
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (mat[i][j] === 0) {
                queue.push([i,j]);
            } else {
                mat[i][j] = -1;
            }
        }
    }
    
    const directions = [[-1,0],[1,0],[0,1],[0,-1]];
    while (queue.length) {
        const [i,j] = queue.shift();
        for (let [k,l] of directions) {
            const r = i + k;
            const c = j + l;
            
            if (r < 0 || c < 0 || r >= row || c >= col || mat[r][c] !== -1 ) continue;
            mat[r][c] = mat[i][j] + 1;
            queue.push([r,c]);
        }
    }
    return mat;
};