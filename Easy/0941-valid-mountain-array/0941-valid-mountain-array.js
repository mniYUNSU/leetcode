/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    // 산 정상을 만들었는지 체크
    let hasPeak = false;
    if (arr.length < 3) return false;
    
    for (let i = 1; i < arr.length; i++) {
        let cur = arr[i], prev = arr[i-1], next = arr[i+1];
        if (cur > prev && cur > next) {
            hasPeak = true;
        }
        else if (cur <= prev && cur <= next) return false;
    };
    return hasPeak;
};