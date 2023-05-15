/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    // 2씩 이동하는 포인터 생성
    // 현재 위치와 다음 위치의 밸류를 바꾼다.
    // 2씩 이동한다.
    let pointer = head;
    
    while (pointer !== null) {
        let memo = pointer.val;
        if (pointer.next === null) return head;
        pointer.val = pointer.next.val;
        pointer.next.val = memo;
        pointer = pointer.next.next;
    }
    return head;
};