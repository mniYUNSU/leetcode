/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    // candies 의 최대 값을 알아낸다.
    // 배열을 순회하며 엘리먼트 + extraCandies 값이 최대값보다 크다면 true, 아니면 false
    // max 캔디 - extra 캔디 값 > candies[i] 가 true 면 true 아니면 false
    let maximumCandy = candies[0];
    
    candies.forEach((element) => {
        if (element >= maximumCandy) {
            maximumCandy = element
        }
    });
    
    let candy = maximumCandy - extraCandies;
    
    let result = candies.map((element, index) => {
        if (candy > element) {
            return false;
        }
        return true;
    })
    
    return result;
};