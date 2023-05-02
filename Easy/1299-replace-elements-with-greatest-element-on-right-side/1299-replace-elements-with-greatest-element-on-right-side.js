/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let result = new Array(arr.length).fill(-1);
    
    for (let i = arr.length - 1; i >= 0; i--) {
        result[i-1] = Math.max(arr[i], result[i]);
    }
    
    return result;    
};