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
var middleNode = function(head) {
    let next = head;
    let afterNext = head;
    
    while (afterNext && afterNext.next) {
        next = next.next;
        afterNext = afterNext.next.next;
    }
    
    return next   
};