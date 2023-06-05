/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    // 일직전상에 점이 있는지 리턴
    // 같은 기울기면 true
    // 기울기 : y2-y1/x2-x1
    // dy/dx
    
    if (coordinates.length <= 2) return true;
    
    let dy = coordinates[1][1] - coordinates[0][1];
    let dx = coordinates[1][0] - coordinates[0][0];

    for (let i = 2; i < coordinates.length; i++) {
        if (dy * (coordinates[i][0] - coordinates[0][0]) !== dx * (coordinates[i][1] - coordinates[0][1])) {
            return false;
        }
    }
    return true;
};