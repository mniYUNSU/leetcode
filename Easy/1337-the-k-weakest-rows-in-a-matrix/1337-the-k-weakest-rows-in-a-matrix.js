/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
//     let soldiers = [];
//     for (let i = 0; i < mat.length; i++) {
//         let soldier = {index:i, value:0};
//         for (let value of mat[i]) {
//             if (value === 0) {
//                 break;
//             } 
//             soldier.value++;
//         }
//         soldiers.push(soldier)
//     }
//     soldiers.sort((a,b) => a.value - b.value);
    
//     return soldiers.slice(0,k).map((e) => e.index);
    
    const getPower = (row) => {
        let power = 0;
        for (const value of row) {
            if (value === 0) {
                return power;
            } 
            power++;
        }
        return power;
    }
    
    let soldiers = {};
    mat.forEach((row, idx) => {
        soldiers[idx] = getPower(row); 
    });
    
    return Object.keys(soldiers).sort((a,b) => soldiers[a] - soldiers[b]).slice(0,k);
};