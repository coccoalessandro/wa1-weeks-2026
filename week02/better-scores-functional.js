"use strict" ;

/*
# Exercise Basic-1: Better Scores
_Goal: basic handling of JavaScript arrays_

Develop a small JavaScript program to manage the scores given to your user on website . Scores are integer numbers, and they may be negative. You should:
 
- Define an array with all the scores you received in chronological order. For simplicity:
  - Embed the scores directly in the source code.
- Duplicate the array, but:
  - Eliminate all negative scores (call \`NN\` the number of negative scores that are deleted).
  - Eliminate the two lowest-ranking scores.
  - Add `NN+2` new scores, at the end of the array, with a value equal to the (rounded) average of the existing scores.
- Print both arrays, comparing the scores before and after the "improvement," and showing the averages in both cases.
*/


const scores = [3, -2, 10, 0, -5, -8,  7, 4, -1, 9, 6] ;

console.log("Scores:")
console.log(scores)

/*
const newscores = [...scores] // make a copy of scores

for (let i = 0; i < newscores.length; i++) {
  const value = newscores[i]
  if (value < 0 ) {
    newscores.splice(i, 1);
  }
}

this method works only if we do not have 2 conscutive negative numbers 
(it's usually better to create new structures, not to modify existing ones)
*/

// a)

/*
const newscores = []

for (const value of scores) {
  if (value >= 0) {
    newscores.push(value)
  }
}
*/

// removing the negative values with filter 

const newscores = scores.filter(x => (x >= 0)) // the result of filter is still an array

console.log("\nRemove the negative values:")
console.log(newscores)

// b)

console.log()
for (const c of [1, 2]) {
  const smallest = Math.min(...newscores)
  const pos_smallest = newscores.indexOf(smallest)
  //console.log("Smallest", smallest, "at position", pos_smalles)
  console.log(`The smallest value is ${smallest} and it is at position ${pos_smallest}`)
  newscores.splice(pos_smallest, 1)
}

console.log("\nRemove the two smallest values:")
console.log(newscores)


// c)

/*
let avg = 0.0;
for (const value of newscores) {
  avg += value
}
*/

let avg = newscores.reduce((sum, val) => (sum + val), 0.0)

avg /= newscores.length
avg = Math.round(avg)

console.log("\nAvg value:", avg)

while (scores.length > newscores.length) {
  newscores.push(avg)
}

console.log()
console.log("Substitute the egative values with the avg val:")
console.log(newscores)
