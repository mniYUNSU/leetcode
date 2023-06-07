/**
 * @param {Function} fn
 */
function memoize(fn) {
    // 이전에 계산했던 값이라면 메모하고, 메모된 값이 들어오면 그 값을 사용한다.
    // 객체를 만들어 args 를 키로, 계산한 값을 value 로 하여 저장한다.
    const memo = {};
    
    return function(...args) {
        const key = JSON.stringify(args);
        
        if (key in memo) {
            return memo[key];
        } else {
            const value = fn(...args);
            memo[key] = value;
            return value;
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */