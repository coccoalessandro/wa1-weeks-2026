"use strict";

console.log("Start")

setTimeout( () => {console.log(`Finished ${count}`)}, 1000 ) // it prints Finished after one second

let count = 1

setInterval( () => {
    console.log(`Finished ${count}`);
    count++;
    }, 1000 ) // it prints Finished count every 1 sec

console.log("End")