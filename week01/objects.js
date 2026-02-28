"use struct";

console.log()

const person_1 = {
    first_name: 'Fulvio',
    last_name: 'Corno',
    city: 'Turin',
    'work city': 'Turin',
    address: {
        city: 'Turin',
        street: 'Corso Duca degli Abruzzi',
        number: 24,
        post_code: 10129
    }
}

const person_2 = {
    first_name: 'Francesca',
    last_name: 'Russo',
    city: ''
}

person_1.age = 'unknown'

console.log(person_1)
console.log(person_2)

const names = person_1.first_name + " " + person_2.first_name

const city1 = person_1.city ?? 'Rome'
const city2 = person_2.city ?? 'Rome' 
// (??) nullish coalescing operator --> checks if the dirst argument is null or undefined -- not for 0 or ''

const wc = person_1['work city']

const myCity1 = person_1.address.city
const myCity2 = person_2?.address?.city  // if we do not use the ? it will raise an error --> we are rying to read sth 
                                        // from an undef; with the ? instead it just returns undefined

const person_1_copy = { ...person_1 }   // it creates a copy of the object
person_1_copy.city = 'Rome'             // here, the city of perso_1_copy will be Rome, the city of person_1 will still be Turin
person_1_copy.address.city = 'New York' // in this second case, instead, also the wc of person_1 will be New York

// the following copies are different --> read left to right, the right one overwrites the left one
const person_1_copy_a = { ...person_1, city: 'Paris' } // here the city will be Paris
const person_1_copy_b = { city: 'Paris', ...person_1 } // here the city will be the one of person_1 (Paris only if the person_1 has no city)


console.log(myCity1)
console.log(myCity2)

const phonebook = {}

phonebook['Fulvio'] = 1234
phonebook['Francesca'] = 9999

console.log(Object.keys(phonebook))  // it returns a list of the keys of that object (phonebook)

console.log(phonebook)

console.log(city1)
console.log(city2)

console.log()

