/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    // 1부터 n 까지의 수로 만들 수 있는 k 갯수 리턴
    // nCk
    
    // 중복허용 안됨
    // 4C2 = (4*3)/(2*1)
    // 1부터 시작하여 +1씩 인덱스를 증가하며 n까지 반복을 수행한다.
    // 조합을 만들 빈 배열을 선언한다.
    // 반복을 수행하며 만든 조합 배열에 넣는다.
    // 배열에 넣은 후 인덱스를 1 증가하여 다시 탐색한다.
    // 조합 배열의 길이가 k 가 된다면 결과로 리턴할 배열에 푸시하고 재귀를 마친다.
    
    let combinations = [];
    
    
    const recur = (index, array) => {
        if (array.length === k)  {
            console.log(array)
            combinations.push([...array]);
            return;
        }
     
        for (let i = index; i <= n; i++) {
            array.push(i);
            recur(i+1, array);
            array.pop();
        }
    }
    
    recur(1,[]);
    return combinations;
    
    
    
    
    
    
};