/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function(nums1, nums2, k) {
    // num1에서 선택한 요소의 합에 num2에서 선택한 요소의 최소값을 곱한 값
    // nums2 를 내림차순으로 정렬
    
    let pairs = [];
    for (let i = 0; i < nums2.length; i++) {
        pairs.push([nums1[i], nums2[i]]);
    }
    pairs.sort((a,b) => b[1] - a[1]);
    console.log(pairs);
    // minHeap 사용
    let heap = new MinPriorityQueue();
    let sum = 0;
    for (let i = 0; i < k; i++) {
        heap.enqueue(pairs[i][0], pairs[i][0]);
        sum += pairs[i][0];
    }
    
    console.log(heap, sum);
    
    let answer = sum * pairs[k-1][1];
    for (let i = k; i < nums1.length; i++) {
        sum -= heap.dequeue().element;
        sum += pairs[i][0];
        heap.enqueue(pairs[i][0], pairs[i][0]);
        
        answer = Math.max(answer, sum * pairs[i][1]);
    }
    console.log(pairs);
    return answer;
};