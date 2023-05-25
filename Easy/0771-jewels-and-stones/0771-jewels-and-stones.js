/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    // stones  중에서 jewels의 갯수 리턴
    let count = 0;
    for (let i = 0; i < jewels.length; i++) {
        for (let j = 0; j < stones.length; j++) {
            if (stones[j] === jewels[i]) count++;
        }
    }
    return count;
};