https://www.youtube.com/watch?v=mnJF4vJ7GyE
​
​
//     let memo, count = 0;
//     for (let i = 0; i < nums1.length; i++) {
//         for (let j = 0; j < nums2.length; j++) {
//             if (nums1[i] === nums2[j]) {
//                 if (!memo) {
//                     memo = [i,j];
//                     count++;
//                 }
//                 else {
//                     if (memo[0] < i && memo[1] < j) {
//                         memo = [i,j];
//                         count++;
//                     }
//                     if (memo[1] < j && memo[0] > i) {
//                         memo = [i,j];
//                         count++;
//                     }
//                 }
//                 continue;
//             }
//         }
//     }
//     return count;