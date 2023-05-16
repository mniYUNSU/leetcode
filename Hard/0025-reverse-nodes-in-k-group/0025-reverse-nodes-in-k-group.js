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
var reverseKGroup = function(head, k) {
    // k 간격으로 노드 뒤집기
    // k 만큼 포인터를 이동시키고 이 횟수를 counting한다.
    // k 와 count가 같아질 때, 다시 함수를 실행하여 결국 리스트 말미까지 도달한다.
    // 리스트의 오른쪽에서부터 왼쪽으로 오면서 노드를 뒤집는다.
    let count = 0;
    let node = head;

    while (node && k > count) {
        node = node.next;
        count++;
    }
    
    if (k === count) {
        // 리스트의 처음부터 뒤집지 않고, 리스트의 끝에서부터 리버스하기 위해 포인터를 이동시킨다.
        node = reverseKGroup(node, k);
        // [1,2,3,4,5] -> [3,4,5] -> [5]
        // [3,4,5] 부터 앞에서부터 2번째 까지 리버스 일어난다.
        const reversed = reverseList(head, node, count);
        // 리버스된 리스트는 헤드가 된다.
        // 이후 남은 [1,2,4,3,5] 의 앞에서부터 두번째까지 리버스 일어난다.
        // [2,1,4,3,5]
        head = reversed;
    }
    return head;
};


const reverseList = function(head, node, count) {
    // 현재 노드의 다음 노드를 임시 변수 temp에 저장
    // 현재 노드의 다음 노드를 이전 노드(node)로 변경
    // 이전 노드(node)를 현재 노드(head)로 변경
    // 다음 노드로 이동하기 위해 헤드(head)를 이전에 저장한 임시 변수 temp로 변경
    // count 변수를 1 감소
    // head : [3,4,5] -> [3,5] -> [4,5] -> [4,3,5] -> [5] 
    // node : [5] -> [3,5] -> [4,3,5]
    // temp : [4,5] -> [5]
    while (count > 0) {
        let temp = head.next;
        head.next = node;
        node = head;
        head = temp;
        count--;
    }
    // 반복이 완료되면 최종적으로 변경된 연결 리스트의 헤드 노드인 node를 반환
    return node;
};