/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // 최초 head 를 next 노드로 가지는 더미 노드를 만든다. 리스트길이가 1인 엣지케이스 방지를 위함
    // n 횟수 만큼 먼저 fast 포인터를 이동시킨다.
    // slow 포인터는 더미노드에서 시작한다.
    // fast 포인터와 slow 포인터를 1씩 증가한다.
    // fast 포인터가 끝까지 도달한 경우 - fast === null
    // slow 포인터는 노드에서 마지막에서 n + 1 번째 만큼 이동해있다. (더미노드가 추가되어있으므로)
    // 즉 fast 와 slow 간 거리가 n + 1만큼 벌어져 있다.
    // slow.next 자리에 slow.next.next 를 할당한다. 즉, 뒤에서 n 번째 노드를 없엔다.
    
    let dummy = new ListNode(0);
    dummy.next = head;
    let slow = dummy; // [0,1,2,3,4,5]
    let fast = head;  // [1,2,3,4,5]
    
    while (n > 0) {
        fast = fast.next;
        n--;
    }
    // fast : [3,4,5]
    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }
    // fast : null
    // slow : [3,4,5]
    // slow : [3,5]
    // dummy : [0,1,2,3,5]
    slow.next = slow.next.next;
    return dummy.next;
};