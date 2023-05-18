/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
    // 모든 노드에 접근할 수 있는 가장 작은 vertices 리턴
    
    // 노드가 만약 밖으로 나가는 경우와 안으로 들어오는 경우가 있다면?
    // 어떤 경우에서든 도달이 가능하다.
    // 노드가 밖으로 나가는 경우만 있다면 도달할 수 있는 경우는 해당 노드에서 출발하는 방법밖에 없다.
    // 즉 밖으로 나가는 경우만 존재하는 노드만 선택한다면 그것이 가장 작은 vertex 모음이 된다.
    
    // edges 를 순회한다. edges 는 i 에서 j 로 나가는 집합이 배열로 구성되어 있음
    // j 로 나간다는 것은 j 노드에선 들어온다는 의미가 되므로 j 노드는 안으로 들어오는 경우가 있는 노드가 된다.
    
    // 길이가 n 이고 0으로 채워진 배열을 만들고, j 인덱스를 +1씩 증가시킨다.
    // 값이 0인 인덱스는 안으로 들어오는 경우가 없는 노드가 된다. 그 인덱스들을 리턴한다.
    
    let vertices = new Array(n).fill(0), result = [];
    
    for (let [from, to] of edges) {
        vertices[to]++;
    }
    
    vertices.forEach((vertex, index) => {
        vertex === 0 && result.push(index);
    })

    return result;
};