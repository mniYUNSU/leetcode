/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    
    // 최초의 badversion 리턴
    // n 의 절반부터 탐색
    // badversion 이면 n - 1
    // 아니면 n + 1
    // 탐색한 n 이 badversion 인데 n-1 이 badversion이 아니면 최초의 badversion
    return function(n) {
        let left = 1, right = n;
        while (left < right) {
            let mid = Math.floor(left + (right - left) / 2);
            if (isBadVersion(mid)) {
                if (!isBadVersion(mid-1)) return mid;
                right = mid;
            } else {
                left = mid + 1;            
            }
        }
        return left;
    };
};