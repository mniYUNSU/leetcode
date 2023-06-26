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
var maxDepth = function(root) {
    // 바이너리 트리의 뎁스 리턴
    // bfs
//     if (!root) return 0;
//     // 리턴할 depth 변수, bfs를 위한 큐 생성
//     let depth = 0, queue = [root];
    
//     // 루프를 돌며 left, right 값이 있다면 큐에 넣는다.
//     // 넣을 때 뎁스를 1 증가한다.
//     // 큐가 비면 루프 종료
//     while (queue.length > 0) {
//         const size = queue.length;
//         for (let i = 0; i < size; i++) {
//             const node = queue.shift();
//             if (node.right) {
//                 queue.push(node.right);
//             } 
//             if (node.left) {
//                 queue.push(node.left);
//             }
//         }        
//         depth++;
//     }
//     return depth;
    
    // dfs
    // 재귀 종료 조건
        if(!root) return null;
    let max = Math.max(maxDepth(root.left), maxDepth(root.right));
    return max + 1;
};
