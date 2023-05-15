/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    // 처음에서 k 번째 값과 끝에서 k 번째 값을 바꾼 리스트 리턴
    // 처음과 끝에서 시작하는 두개의 포인터 사용
    // start 포인터를 kth 노드에 위치시킨다.
    // start 포인터를 끝까지 이동시키며 end 포인터를 이동시킨다
    // 포인터가 끝에 도달했을 때 start 포인터 밸류와 end 포인터 밸류를 바꾼다
    let start = head, end = head;
    // [1,2,3,4,5] , 2
    for (let i = 1; i < k; i++) {
        start = start.next;
    }
    // start : [2,3,4,5]
    let current = start;
    while (current.next) {
        current = current.next;
        end = end.next;
    }
    // end : [4,5]
    let memo = start.val;
    start.val = end.val;
    end.val = memo;
    return head;
    
    
    
};