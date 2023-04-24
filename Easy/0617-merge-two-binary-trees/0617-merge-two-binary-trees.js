/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    // 입력받은 두 바이너리 트리를 합친 트리 리턴
    // 합친 트리 노드의 밸류는 각 노드의 밸류의 합
    
    // 1. root1 이 null 이면 root 2 리턴
    // 2. root2 가 null 이면 root 1 리턴
    // 3. root1.val 은 root1.val + root2.val
    // 4. 위 과정을 root1.left 와 root2.left 에 반복
    
    if (!root1) return root2;
    if (!root2) return root1;
    
    root1.val += root2.val;
    root1.left = mergeTrees(root1.left, root2.left);
    root1.right = mergeTrees(root1.right, root2.right);
    return root1;
};