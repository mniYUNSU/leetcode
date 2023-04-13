/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    // 배열을 순회하다가 0이면 그 자리에 0을 하나 더 넣고 나머지를 오른쪽으로 옮겨야 함
    // 배열의 길이는 고정이므로 0을 넣었다면 가장 마지막 요소를 빼야함
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            // 배열의 i 인덱스에 0을 삽입한다.
            arr.splice(i, 0, 0);
            // 0을 삽입 후 배열의 길이는 고정이므로 마지막 요소를 뺀다.
            arr.pop();
            // 0을 삽입하면 다음 인덱스도 0이 되므로 다음다음 인덱스부터 탐색해야 함.
            i++;
        }
    }
};