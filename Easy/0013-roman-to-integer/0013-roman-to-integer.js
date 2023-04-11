/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanNumerals = {
        'I' : 1, 'V' : 5,
        'X' : 10, 'L' : 50,
        'C' : 100, 'D' : 500, 
        'M' : 1000,
    };
    
    let value = 0;
    for (let i = 0; i < s.length; i++) {
        let currentLetter = romanNumerals[s[i]];
        let nextLetter = romanNumerals[s[i+1]];
        
        if (currentLetter < nextLetter) {
            value += nextLetter - currentLetter;
            i++;
        }
        else {
            value += currentLetter;
        }
    }
    return value;
};