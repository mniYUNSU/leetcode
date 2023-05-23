/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], map.get(nums[i]) ? map.get(nums[i]) + 1 : 1); 
    }
    let values = map.values();
    let array = Array.from(map);
    
    
    array.sort((a,b) => b[1] - a[1]);
    let result = array.slice(0, k).map((e) => e = e[0]);
    return result;
};