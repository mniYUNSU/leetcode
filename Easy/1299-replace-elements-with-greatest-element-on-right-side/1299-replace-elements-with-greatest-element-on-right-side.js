/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let result = new Array(arr.length).fill(-1);
    let max = -1;
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            max = Math.max(max, arr[j]);
        }
        result[i] = max;
        max = -1;
    }
    return result;
};