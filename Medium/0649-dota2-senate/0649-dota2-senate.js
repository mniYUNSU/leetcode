/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    // R 과 D 로 이루어진 string 값
    // R 다음에 나오는 D 를 삭제
    // R 이 남아있다면 Radiant 리턴 아니라면 Dire리턴
    
    // senate 를 돌며 R 과 D 를 따로 만든다
    let radiant = [], dire = [], length = senate.length;
    for (let i = 0; i < length; i++) {
        if (senate[i] === 'R') {
            radiant.push(i);
        } else {
            dire.push(i);
        }
    }
    
    // RDDR
    // rad : [0, 3]
    // dir : [1, 2]
    
    // radiant 와 dire 배열 중 어느 하나라도 빈 값이 나오기 전 까지 루프를 돌린다.
    // 앞자리에 있는 파티가 권한을 행사할 수 있으므로 radiang 와 dire 의 가장 앞쪽 요소의 값을 판단한다.
    // radiant[i] > dire[i] 라면
    // dire 가 더 앞에 있었다는 뜻이므로 먼저 권리를 행사하게 되어 radiant 권한을 금지시킬 수 있다.
    // dire 배열에 라운드 수를 추가한다. 총 라운드는 senate.length 인데, 추가된 권한이므로 현재 값 + 라운드가 된다.   
    // 즉 dire 가 빈 배열이라면 모든 권리를 행사했거나 금지당한 것이므로 radiant 의 승리다
    
    while (radiant.length > 0 && dire.length > 0) {
        radFirst = radiant.shift();  // 0, 3, 4, 8
        dirFirst = dire.shift();  // 1, 2, 6, undefined
        
        if (radFirst > dirFirst) {
            dire.push(dirFirst + length); // dir : [6] -> []
        } else {
            radiant.push(radFirst + length);  // rad : [3, 4] -> [8]
        }
    }
    
    return radiant.length > 0 ? 'Radiant' : 'Dire';
};