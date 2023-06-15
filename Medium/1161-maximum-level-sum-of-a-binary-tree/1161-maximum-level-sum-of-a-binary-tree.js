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
    // 노드 순회하며 현재 노드를 큐에 넣는다.
    // 큐에서 하나씩 빼며 그 노드 값을 누적한다.
    // 큐에서 뺀 노드의 left 와 right를 큐에 넣는다.
    // 큐가 빌 때 더해진 누적 값을 저장해두고, 누적값이 업데이트될 때마다 대소비교한다.
    
    
    let maxLevelSum = Number.MIN_SAFE_INTEGER, maxLevel = 1;
    let queue = [root], level = 1;
    
    while (queue.length) {
        let currentSum = 0;
        let size = queue.length;
        
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            currentSum += node.val;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        if (currentSum > maxLevelSum) {
            maxLevelSum = currentSum;
            maxLevel = level;
        }
        level++;
    }
    return maxLevel;
};