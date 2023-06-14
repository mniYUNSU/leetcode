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
var getMinimumDifference = function(root) {
    // 현재 노드에서 val (prevNode) 과 left, right (currentNode) 값의 차이 계산
    // 최소 판단하여 저장한 값보다 작다면 그 값으로 저장
    // 재귀 수행으로 전체노드탐색
    
    // Tree 순회
    // - prenoder : self, left, right
    // - inorder : left, self, right
    // - postorder : left, right, self
    // 이진트리의 성질 
    // - inorder -> 오름차순 정렬이 됨
    // - 두번째 노드를 찾았을 때 부터 앞 노드 값과 차이값을 구해서 min값 유지
    
    let prevValue = -Infinity;
    let minDiff = Infinity;
    
    // node 가 falsy 일때 리턴
    const recur = (node) => {
        if (!node) return;
        // 왼쪽 subtree부터 확인
        recur(node.left);
        // 노드 이전 value 와 현재 노드의 value 차이 계산
        minDiff = Math.min(minDiff, node.val - prevValue);
        // 계산 후 다음 재귀를 위해 현재 노드 value 를 이전 value에 할당
        prevValue = node.val;
        recur(node.right);
    }
    
    recur(root);
    return minDiff;
};