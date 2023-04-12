/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

// 런너 기법
// 느린 포인터와 빠른 포인터를 활용한다.
// 빠른 포인터가 끝까지 도달하면 느린 포인터는 노드의 중앙에 위치한다.
// 절반으로 나뉘어진 노드의 순서를 뒤집는다.
// 인자로 받은 연결 리스트와 일치한지 비교한다.
var isPalindrome = function(head) {
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // slow 를 뒤집는다. [4,3,2,1] -> [1,2,3,4]
    let prev = null, next; // 이전값, 다음값
    while (slow) {
        next = slow.next; // next:[3,2,1],[2,1],[1],null
        slow.next = prev; // slow:[4],[3,4],[2,3,4],[1,2,3,4]
        prev = slow; // prev:[4],[3,4],[2,3,4],[1,2,3,4]
        slow = next; // slow:[3,2,1],[2,1],[1],null
    }
    
    fast = head; // fast 위치 초기화 [1,2,3,4,4,3,2,1]
    slow = prev; // 뒤집어진 slow [1,2,3,4]
    // slow 기준으로 대소 비교 
    while (slow) { 
        if (fast.val !== slow.val) {
            return false
        }
        fast = fast.next;
        slow = slow.next;
    }
    return true;
};