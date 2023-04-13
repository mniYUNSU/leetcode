/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let memo = 0, count = 0;
    
    for (let value of nums) {
        if (value === 1) {
            count++;
            if (count > memo) {
                memo = count;
            } 
        } else {
            count = 0;
        }
    }
    
    return memo
};