/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    // board에 word의 존재여부 리턴
    // board[i][j] 를 돌며 상하좌우에 맞는 word가 있는지 판단한다.
    
    const height = board.length;
    const width = board[0].length;
    const direction = [[0,1], [0,-1], [1,0], [-1,0]];
    
    // 현재 문자와 word 의 문자와 맞는지 판단
    // 맞다면 상하좌우 판단
    const verif = (x, y, k) => {
        if (board[x][y] !== word[k]) return false;
        // word 의 마지막 인덱스까지 도착한 경우, board에 word가 존재하므로 true
        if (k === word.length - 1) return true;
        // 방문 기록
        board[x][y] = 'visited';
        // 상하좌우 판단
        for (const [dx, dy] of direction) {
            const i = x + dx;
            const j = y + dy;
            if (i >= 0 && i < height && j >= 0 && j < width) {
                if (verif(i, j, k + 1)) return true;
            };
        };
        // 상하좌우 판단 후, 방문기록한 값 초기화
        board[x][y] = word[k];
        // 기본값은 false 리턴
        return false;
    };
    
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            // board의 문자마다 verif 실행
            // 리턴값이 true라면 board 안에 word가 존재하므로 true 리턴
            const verified = verif(i, j, 0);
            if (verified) return true;
        };
    };
    
    return false;
};