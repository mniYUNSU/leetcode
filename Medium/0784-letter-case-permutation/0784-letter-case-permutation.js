/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {    
    // 숫자면 넘어간다
    // 알파벳이면 대소문자 모두 결과 배열에 넣어야 한다
    // 빈 스트링을 만든다
    // 0부터 s.length-1 반복 수행
    // s[i] 가 숫자면 스트링에 추가하고 넘어간다
    // 알파벳이면 스트링에 대소문자를 모두 추가하고 넘어간다
    // 스트링의 길이가 s.length 와 같으면 배열에 넣고 리턴
    
    let result = [];
    
    const permutation = (index, string) => {
        if (string.length === s.length) {
            result.push(string);
            return
        }
        
        if(!isNaN(s[index])) {
            permutation(index+1, string+s[index]);
            return;
        }
        else if (s[index] === s[index].toUpperCase()) {
            permutation(index+1, string+s[index]);
            permutation(index+1, string+s[index].toLowerCase());
        }
        else if (s[index] === s[index].toLowerCase()) {
            permutation(index+1, string+s[index]);
            permutation(index+1, string+s[index].toUpperCase());
        }
    }

    permutation(0, '');    
    return result;
};