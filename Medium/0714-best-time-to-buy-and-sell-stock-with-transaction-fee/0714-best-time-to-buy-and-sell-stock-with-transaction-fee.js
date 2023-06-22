/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    // 싸게 사서 비싸게 판다.
    // 팔 때마다 fee 만큼 깎인다.
    // 최대 이익 리턴
    
    // 주식을 hold 중일 때의 손익
    // 주식을 갖고있지 않을 때(sold)의 손익
    // 무조건 사야 팔 수 있으므로 hold의 초기값은 -price[0]
    let hold = -prices[0], sold = 0;
    
    // 주식이 없는 상태에서 가능한 경우는 가만히 있거나, 사거나
    // 주식이 있는 상태에서 가능한 경우는 가만히 있거나, 팔거나
    for (let i = 1; i < prices.length; i++) {
        // 주식이 없는 상태의 최대 이익 : 주식이 없는 상태의 손익(가만히 있는다)과 주식이 있는 상태에서 현재 가격에 팔았을 때 이익 비교
        sold = Math.max(sold, hold + prices[i] - fee);
        // 주식이 있는 상태의 최대 이익 : 주식을 산 상태의 손익(가만히 있는다)과 주식이 없는 상태에서 현재 가격에 다시 샀을 때의 이익 비교
        hold = Math.max(hold, sold - prices[i]);        
    }
    
    // 주식이 없는 상태의 값(팔아야 이익) 리턴
    return sold;
};