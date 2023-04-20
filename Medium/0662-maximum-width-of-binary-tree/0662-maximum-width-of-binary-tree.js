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
var widthOfBinaryTree = function(root) {
    // 최대 넓이 리턴
    // 넓이 : 한 레벨의 가장 왼쪽 노드와 가장 오른쪽 노드의 길이
    // 부모 노드의 왼쪽 자식 노드의 인덱스는 부모 노드 인덱스의 2배이다. (2n)
    // 오른쪽 자식 노드의 인덱스는 부모 노드 인덱스의 2배 + 1 이다. (2n+1)
    // 각 레벨에서 가능한 최대 너비는 가장 오른쪽 인덱스 - 가장 왼쪽 인덱스 + 1이다.
    // ex) 7 - 4 + 1 = 4
    // [1,2,3,4,5,6,7]
    // 1st level :      1 
    // 2nd level :     2,3 
    // 3rd level :   4,5,6,7 
    
    let maxWidth = 0;
    let minPosition = [0];
    
    // 레벨의 최초 dfs 실행 시 현재 레벨에 대응되는 최소 인덱스 포지션 값이 없으므로 레벨(인덱스) 에 대응되는 minPosition에 푸시한다.
    // 알고있는 maxWidth 와 현재 인덱스 - 최소 인덱스 포지션 값(가장 왼쪽 노드의 인덱스) + 1 한 값 중 큰 값을 할당한다.
    // 왼쪽 노드로 보낼 땐 2n, 오른쪽으로 보낼땐 2n+1 한 값을 현재 포지션 인덱스로 dfs 를 실행한다.
    // 실행할 때 마다 레벨을 증가시킨다.
    const dfs = (tree, level, current) => {
        if (!tree) return;
        if (minPosition[level] === undefined) minPosition.push(current);
        
        let diff = current - minPosition[level];
        maxWidth = Math.max(maxWidth, diff + 1);
        
        dfs(tree.left, level + 1, diff*2);
        dfs(tree.right, level + 1, diff*2 + 1);
    }
    
    dfs(root, 0, 0);
    return maxWidth;
};