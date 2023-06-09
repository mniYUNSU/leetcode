/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    // 온도 배열이 주어진다.
    // 더 따뜻한 날씨가 될 때 까지 몇일을 기다려야하는지 구하여 리턴
    
    // 온도배열을 순회
    let stack = [];
    for (let i = 0; i < temperatures.length; i++) {
        let days = 0;
        stack.push(temperatures[i]);
        let ref = stack.pop();
        
        temperatures[i] = 0;
        
        for (let j = i+1; j < temperatures.length; j++) {
            if (temperatures[j] <= ref) {
                days++;     
            } else {
                temperatures[i] = days + 1;
                break;
                // ref.push(temperatures[i]);  
            }
            
        }
        
    }
    
    console.log(temperatures)
    return temperatures;
};