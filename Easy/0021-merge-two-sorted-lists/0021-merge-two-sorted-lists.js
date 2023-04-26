/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    
    // 각 리스트의 밸류 간 대소비교
    // 둘 중 null 인 리스트가 있다면 다른 한쪽 리스트 리턴
    // list1.val > list2.val 이라면
    // result.next = list2 가 된다.
    // 정렬이 되었으므로 완료된 노드를 뺀다.
    // list2 = list2.next가 된다. 
    
    if (list1 === null) return list2;
    if (list2 === null) return list1;
    
    let dummy = new ListNode();
    let pointer = dummy;
    
    while (list1 !== null && list2 !== null) {
        if (list1.val > list2.val) {
            pointer.next = list2;
            list2 = list2.next;
            // 
        }
        else {
            pointer.next = list1;
            list1 = list1.next;
        }
        pointer = pointer.next;
        // list1 : [2,4], [2,4], [4], [4], null
        // list2 : [1,3,4], [3,4], [3,4], [4], [4]
        // pointer [1,2,4], [1,3,4], [2,4], [3,4], [4]
        // dummy : [0,1,2,4], [0,1,1,3,4], [0,1,1,2,4], [0,1,1,2,3,4]
    }
    
    if (list1 === null) pointer.next = list2;
    if (list2 === null) pointer.next = list1;
    
    return dummy.next;
};