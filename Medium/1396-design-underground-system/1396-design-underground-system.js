
var UndergroundSystem = function() {
    
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    if (!this[stationName]) this[stationName] = [];
    const updateId = Object.values(this[stationName]).map(travel => {
        if (travel.id) {
            travel
        } 
    });
    this[stationName].push({ id, time: t, checkOut: null });
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
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
    const checkedOutTravel = Object.values(this[startStation]).filter(travel => travel.checkOut === endStation);
    const travelTime = checkedOutTravel.reduce((a,b) => a + b.time ,0);
    // for (let i = 0; i < this[startStation].length; i++) {
    //     if (this[startStation][i].checkOut === endStation) {
    //         this[startStation].splice(i,1);
    //     }
    // };
    return (travelTime / checkedOutTravel.length).toFixed(5);
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */