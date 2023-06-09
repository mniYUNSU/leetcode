/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    // 온도 배열이 주어진다.
    // 더 따뜻한 날씨가 될 때 까지 몇일을 기다려야하는지 구하여 리턴
    
    // 온도배열을 순회
    // stack에 넣고 하나씩 빼서 그 요소의 다음 인덱스부터 순회한다
    // 스택에서 뺀 값이 다음 인덱스보다 크면 일수를 늘리고 아니라면 일수 + 1 값을 할당한다.
    // 시간이 너무 오래걸림
    
//     let stack = [];
//     for (let i = 0; i < temperatures.length; i++) {
//         let days = 0;
//         stack.push(temperatures[i]);
//         let ref = stack.pop();
        
//         temperatures[i] = 0;
        
//         for (let j = i+1; j < temperatures.length; j++) {
//             if (temperatures[j] <= ref) {
//                 days++;     
//             } else {
//                 temperatures[i] = days + 1;
//                 break;
//             }
//         }
//     }
//     return temperatures;
    
    // 각 온도의 인덱스를 스택에 저장한다.
    // 온도배열을 반복순회
    // 스택이 존재하고, 현재 온도 값이 마지막으로 스택에 저장된 인덱스값 보다 클때까지 반복
    // 스택에서 빼서 현재 인덱스 값과의 차이를 result에 업데이트한다.
    // 스택에 인덱스를 넣는다.
    
    let stack = [], result = new Array(temperatures.length).fill(0);
    
    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let temp = stack.pop();
            result[temp] = i - temp;
        }
        stack.push(i);
    }
    return result;
};