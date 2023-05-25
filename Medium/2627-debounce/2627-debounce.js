/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    // 함수 실행 요청이 연속적으로 들어온 경우 가장 마지막 요청만 수행
    // 함수 실행이 될 때마다 타이머 초기화 -> 타이머 재설정
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args)
        }, t); 
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */