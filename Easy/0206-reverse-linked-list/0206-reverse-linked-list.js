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
var reverseList = function(head) {
    // 뒤집어진 연결리스트 리턴
    
    // 이전 값을 가리킬 포인터 생성
    let prev = null;
    // 현재 위치를 가리킬 포인터 생성
    let current = head;
    
    // 리스트 끝까지 반복 수행
    while (current) {
        // 다음 값을 가리킬 포인터
        // null -> 1 -> 2 -> 3
        let next = current.next;
        // 현재 위치의 next가 가리킬 위치는 prev가 된다.
        // null <- 1 - 2 -> 3
        current.next = prev;
        // 이전 값을 가리키는 위치를 1 이동한다.
        prev = current;
        // 현재 위치를 1 이동한다.
        current = next;
        
        // prev 와 current 를 1씩 이동하다보면 current 가 null이 되어 반복이 종료된다.
        // 그 때 prev는 current 보다 1만큼 뒤의 리스트가 된다.
        // 즉 반복이 종료됐을 때 prev 는 null <- 1 <- 2 <- 3 이 된다.
    }
    return prev;
};