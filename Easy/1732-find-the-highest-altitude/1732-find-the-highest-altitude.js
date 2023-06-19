/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    // 현재 고도 변수 생성 - 초기값 0
    // gain 순회하며 현재고도에 gain[i] 더해감
    // 최대 고도 변수 생성 - 현재 고도를 더해가며 대소비교를 통해 업데이트
    // 최대고도 리턴
    let currentAltitude = 0, maximumAltitude = 0;
    
    for (let i = 0; i < gain.length; i++) {
        currentAltitude += gain[i];
        maximumAltitude = Math.max(maximumAltitude, currentAltitude);
    };
    
    return maximumAltitude;
};