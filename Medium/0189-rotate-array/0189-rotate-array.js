/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // js 내장 함수 사용한 solution
    // k 만큼 nums 를 오른쪽으로 이동
    // k 가 nums.length 보다 크면 결국 한 사이클이 돌아 똑같은 num 가 나오게 된다.
    // 불필요한 반복을 방지하기 위해 k 를 재할당 한다.
    // 순서를 옮길때 인덱스를 초과하는 요소를 떼어내고 맨 앞에 붙인다.
    
    // k = k % nums.length;
    // let overLengthArray = nums.splice(nums.length - k);
    // nums.splice(0,0,...overLengthArray);  
    
    
    // 내장함수 미사용 solution
    // 배열 요소를 서로 바꾸는 함수를 만든다.
    // 전체 배열의 순서를 뒤집는다.
    // 0 부터 k - 1 까지 뒤집는다. 
    // k 부터 배열 끝 까지 뒤집는다.
    
    k = k % nums.length;
    const reverse = (start, end) => {
        while (start < end) {
            let memo = nums[end];
            nums[end] = nums[start];
            nums[start] = memo;
            start++;
            end--;
        }
    }
    
    reverse(0, nums.length - 1);
    reverse(0, k - 1);
    reverse(k, nums.length - 1);
    
    // 배열의 마지막 k 번째 까지의 요소는 맨 앞으로 와야 함.
    // 마지막 요소부터 앞으로 배치 시키기 위해 모든 배열의 순서를 반대로 뒤집어야 한다.
    // 역순으로 재배치된 배열의 앞에서 k 번째 까지 다시 뒤집으면 맨 앞으로 와야 할 k 번째 까지 요소를 알 수 있음
    // k 부터 끝까지 다시 뒤집으면 결국 최초의 배열의 0부터 k 까지의 요소들이 된다.
    // 즉 최초 배열의 끝에서 k 까지의 요소들 + 최초 배열의 0에서 k 까지의 요소들 이 된다.
};