"use strict";
const {
    performance
} = require('perf_hooks');
//Faster Code
function addUpTo(n) {
    return n * (n + 1) / 2;
}

//performance test
const time1 = performance.now();
addUpTo(1000000000);
const time2 = performance.now()
console.log(`Time Elaped: ${(time2 - time1) / 1000} seconds`);

//Slower Code
function addUpTo2(n) {
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i;

    }
    return total
}
//performance test
const time3 = performance.now();
addUpTo2(1000000000);
const time4 = performance.now()
console.log(`Time Elaped: ${(time4 - time3) / 1000} seconds`);
