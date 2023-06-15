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
var maxLevelSum = function(root) {
    // 같은 레벨에 있는 노드 총합이 가장 큰 레벨 리턴
    let maxLevelSum = Number.MIN_SAFE_INTEGER, maxLevel = 1;
    let queue = [root], level = 1;
    
    while (queue.length) {
        let currentSum = 0;
        let size = queue.length;
        
        // 레벨에 노드가 존재할 때, 그 노드들의 값들을 누적
        // 노드의 left, right 는 다음 레벨이 되므로 큐에 넣는다
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            currentSum += node.val;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        // 저장된 최대값보다 크면 최대값 업데이트, 현재 레벨을 저장
        if (currentSum > maxLevelSum) {
            maxLevelSum = currentSum;
            maxLevel = level;
        }
        level++;
    }
    return maxLevel;
};