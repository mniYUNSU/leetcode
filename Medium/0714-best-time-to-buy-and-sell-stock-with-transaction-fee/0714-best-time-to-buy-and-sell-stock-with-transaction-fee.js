/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    // 싸게 사서 비싸게 판다.
    // 팔 때마다 fee 만큼 깎인다.
    // 최대 이익 리턴
    
    
    let buy = -Infinity, sell = 0;
    // 이미 구매했다면 -> 가만히 있거나, 팔거나 두가지
    // 구매하지 않았다면 -> 가만히 있거나, 사거나 두가지
    for (let price of prices) {
        buy = Math.max(buy, sell - price);
        sell = Math.max(sell, buy + price - fee);
    }
    
    return sell;
};