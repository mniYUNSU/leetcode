/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestZigZag = function(root) {
    // 가장 아래쪽 노드까지 탐색 (깊이 우선 탐색, depth first search) 
    // 오른쪽 노드라면 왼쪽으로 타고 내려가고 왼쪽이라면 오른쪽으로 타고 내려가야 함 -> 경로 + 1
    // 같은 방향으로 타고 내려가면 지그재그경로를 초기화해야 함 -> 경로 = 1
    // 가장 큰 지그재그 경로 리턴
    
    // 왼쪽 혹은 오른쪽 노드가 null 이면 탐색 종료
    // 존재한다면 그 노드의 자식 노드 탐색 , 오른쪽 노드에서 왼쪽이라면 경로 + 1, 오른쪽에서 오른쪽이면 경로 1로 초기화
    
    let result = 0;
    
    const dfs = (currentRoot, length, direction) => {
        if (currentRoot === null) return;
        // 지그재그 경로의 최댓값을 저장
        result = Math.max(result, length);
        if (direction === 'left') {
            // 왼쪽에서 오른쪽으로 타므로 지그재그 경로 길이 + 1
            dfs(currentRoot.right, length + 1, 'right');
            // 지그재그 경로 길이 초기화
            dfs(currentRoot.left, 1, 'left');
        } else {
            dfs(currentRoot.left, length + 1, 'left');
            dfs(currentRoot.right, 1, 'right');
        }
    }
    
    dfs(root, 0, 'left');
    dfs(root, 0, 'right');
    
    return result;
};