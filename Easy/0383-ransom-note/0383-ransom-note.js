/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    // let stack = '';
    // for (let i = 0; i < magazine.length; i++) {
    //     if (ransomNote !== stack) {
    //         stack += magazine[i]
    //     } else {
    //         break;
    //     }
    // }
    // return stack === ransomNote
    
    let hashMap = {};
    for (let letter of magazine) {
        if (!hashMap[letter]) {
            hashMap[letter] = 0;
        } 
        hashMap[letter] += 1;
    }
    
    for (let letter of ransomNote) {
        if (!hashMap[letter]) {
            return false
        }
        hashMap[letter] -= 1;
    }
    return true
};