/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // l1 각 밸류와 l2 의 각각의 밸류를 더한다
    // 10을 넘어간다면 더한 값의 10째 자릿수가 그 위치의 val 이 되며, 더한 값 - 10 은 next로 넘어간다.
    
    let list = new ListNode(0);
    let pointer = list, sum = 0, overTen = 0;
    // l1 이나 l2 가 남지 않을 때 까지 반복한다.
    // 마지막까지 덧셈을 마쳤는데, 마지막 덧셈이 10을 넘어가는 경우엔 next 에 1을 추가해야한다.
    // 즉 sum 이 0 보다 크다면 이전 덧셈에서 10을 넘어갔다는 뜻이 되므로 이 조건도 루프 조건에 포함해야 한다.
    while (l1 !== null || l2 !== null || sum > 0) {
        if (l1 !== null){
            sum = sum + l1.val;
            l1 = l1.next;
        }
        if (l2 !== null){
            sum = sum + l2.val;
            l2 = l2.next;
        }
        if (sum >= 10) {
            overTen = 1;
            sum = sum - 10;
        }
        // 포인터가 0부터 시작하므로 다음 값에 더한 값을 할당한다.
        pointer.next = new ListNode(sum);
        // 포인터의 위치를 한칸씩 옮긴다.
        pointer = pointer.next;
        // 더한 값이 10 이상이면 sum 은 +1 한 값을 시작으로 더해야 한다.
        sum = overTen;
        // 할당이 모두 끝나면 초기화한다.
        overTen = 0;
    }
    return list.next;
};
