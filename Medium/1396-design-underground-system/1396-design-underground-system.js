
var UndergroundSystem = function() {
    
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    // 첫 데이터라면 stationName을 key 로 한 배열을 만든다.
    // stationName 밸류에 탑승객 id, 탑승 시간, 체크아웃 여부를 푸시한다.
    if (!this[stationName]) this[stationName] = [];
    this[stationName].push({ id, time: t, checkOut: null });
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    // 체크인한 데이터 중 탑승객 id 와 일치한 데이터와 체크아웃 하지 않은 데이터를 필터링한다.
    // 그 데이터에 체크아웃 stationName 을 넣는다.
    Object.values(this).map((key) => {
        for (let i = 0; i < key.length; i++) {
            if (key[i].id === id && key[i].checkOut === null) {
                key[i].time = t - key[i].time;
                key[i].checkOut = stationName;
            }
        }
    });
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    // 체크인, 체크아웃까지 모두 성공한 데이터를 필터링한다.
    // 시간의 평균을 리턴한다.
    const checkedOutTravel = Object.values(this[startStation]).filter(travel => travel.checkOut === endStation);
    const travelTime = checkedOutTravel.reduce((a,b) => a + b.time ,0);
    return (travelTime / checkedOutTravel.length).toFixed(5);
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */