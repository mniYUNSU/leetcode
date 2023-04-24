/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    // 완전한 바이너리 트리
    // root 노드의 next 는 null 이다. // 1 -> null
    // root.left의 next는 root.right이다. // 2 - 3 -> null
    // root.right.next 는 null 이다. // 3 -> null
    // root.next가 만약 있다면? // 4 - 5 - 6 - 7
    // root.right.next는 root.next의 left가 된다. // 5 - 6
    // 재귀로 root의 왼쪽과 오른쪽을 탐색한다.
    if (!root) return root;
    if (!root.left || !root.right) return root;
    
    root.left.next = root.right;
    root.right.next = root.next ? root.next.left : null;
    
    connect(root.left);
    connect(root.right);
    return root;
};