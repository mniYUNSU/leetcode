/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    // 트윈 노드 합의 최대값 리턴
    // head 의 사이즈는 짝수
    // head 를 left, right 반으로 나눈다.
    // right를 뒤집는다.
    // left와 right의 val 을 더해 최대값이라면 결과 변수에 할당한다.
    // 다음 위치로 이동한다.
    
    let result = 0;
    let left = head, right = head;
    
    // 리스트를 반으로 나누려면 left를 1씩, right를 2씩 이동한다.
    // right가 끝에 닿으면 left는 절반만큼 왔으므로, left.next는 right가 된다.
    while (right.next.next) {
        left = left.next;
        right = right.next.next;
    }
    // right 를 뒤집고 left를 head로 초기화시킨다.
    right = reverseList(left.next);
    left = head;
    
    // 이제 right 가 끝까지 도달할 때 까지 각 노드의 밸류의 합과 result 의 최댓값을 result에 저장한다.
    while (right) {
        result = Math.max(result, left.val + right.val);
        left = left.next;
        right = right.next;
    }
    return result;
};

const reverseList = function (head) {
    let prev = null, current = head;    
    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}