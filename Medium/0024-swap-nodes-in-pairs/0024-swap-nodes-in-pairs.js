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
    // 인접한 두 노드를 스위칭 한 리스트 리턴
    
    let pointer = head;
    
    while (pointer !== null) {
        console.log(pointer)
        let memo = pointer.val;
        if (pointer === null || pointer.next === null) return head;
        pointer.val = pointer.next.val;
        pointer.next.val = memo;
        
        pointer = pointer.next.next;
    }
    
    return head;
};