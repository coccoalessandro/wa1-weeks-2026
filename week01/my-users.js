"use strict" ;

/*
# Exercise Basic-2: My Users' List
_Goal: basic handling of JavaScript strings_

Develop a small JS program to manage the list of users in a website.

- Define the names of users as a comma-separated list.
  - For instance: `"Luigi De Russis, Francesca Russo, Fulvio Corno, Luca Scibetta, Alberto Monge Roffarello"`.
- Parse the string and create an array containing one name per array position.
  - Beware: no extra spaces should be present.
- Create a second array by computing the acronyms of the people as the initial letters of the name. Acronyms should be in all-capital letters.
  - For example, `Luigi De Russis` -> `LDR`.
- Print the resulting list of acronyms and the full names.
  - Extra: in alphabetical order of acronym.
*/

// a)
const names = "Luigi De Russis, Francesca Russo, Fulvio Corno, Luca Scibetta, Alberto Monge Roffarello" ;


// b)
const list_names = names.split(",")

for (let i = 0; i < list_names.length; i++) {
  list_names[i] = list_names[i].trim()
} 

/* an alternative 

const list_2 = []

for (const name of list_names) {
  list_2.push(name.trim())
}

*/

console.log(list_names)
console.log(names)

//c)

const acr_list = []

for (const name of list_names) {
  const names = name.split(" ")
  let acr = ""
  for (const n of names) {
    acr += n[0]
  }
  acr_list.push(acr)
}

console.log(acr_list.sort())