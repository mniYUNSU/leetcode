/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let max = -1;
    
    for (let i = arr.length - 1; i >= 0; i--) {
        let cur = arr[i]; // 1, 6, 4, 5, 18, 17
        arr[i] = max; // -1, 1, 6, 6, 6, 18
        max = Math.max(cur, max); // 1, 6, 6, 6, 18, 18
    }
    
    return arr;    
};