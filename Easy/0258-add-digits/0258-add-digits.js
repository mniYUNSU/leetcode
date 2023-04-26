/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    // 입력받은 수의 자릿수를 한자릿수가 나올때 까지 더한다.
    
    // O(1) - digital sum 
    // 한 자릿수가 될 때까지 더한 값은 원래 수를 9로 나눳을 때의 나머지와 같다.
    // 예외: 9로 나눠질 경우 ex) 9, 18 등 -> 무조건 9가 된다. 
    if (num < 10) return num;
    return num % 9 === 0 ? 9 : num % 9;
};