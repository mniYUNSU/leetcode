/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    // 현재 노드와 인접한 다른 노드는 같은 그룹에 있어선 안된다.
    // 서로 인접하지 않고 두 그룹으로 나눌 수 있다면 true
    
    // 노드를 방문 했는지 판단하기 위한 배열 생성
    let visited = new Array(graph.length).fill(-1);
    // 인접한 노드를 탐색하기 위해 queue사용
    let queue = [];
    visited[0] = 1;
    for (let i = 0; i < graph.length; i++) {
        if (graph[i].length > 0) {
            queue.push(i);
        }
    }
    // console.log(queue)
    // queue 를 소진할 때 까지 루프를 돈다.
    while (queue.length > 0) {
        let current = queue.shift();
        let connected = graph[current];
        
        for (let node of connected) {
            // 방문한 적이 없는 노드라면 방문했음을 기록한다.
            // 다음 큐에 넣는다.
            if (visited[node] === -1) {
                visited[node] = 1 - visited[current];
                queue.push(node);
            }
            // 방문한적이 있고, 현재 노드와 같은 값이라면
            // 서로 인접하고 두 그룹으로 나눌 수 없는 노드이므로 false
            else if (visited[node] === visited[current]) {
                return false;
            }
        }
    }
    console.log(visited)
    return true;
};