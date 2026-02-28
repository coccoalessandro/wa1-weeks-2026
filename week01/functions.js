"use strict";

// three different ways of declaring a function

function square(x) { // functions always return a value --> my value if I explicitly write it, otherwise undefined
    return x * x
}

// const wwww = square --> I can do it (and then call the wwww function) 
// because square is a variable pointing to a function

const third = function(a) {
    return a * square(a)
}

const fourth = (base) => {
    return square(square(base))
}

const y = 7;
const y2 = square(y)
const y3 = third(y)
const y4 = fourth(y)
console.log(y, y2, y3, y4)

function table_of_powers(base, power_fn) { // it takes a function as second argument
    for (let i = 1; i<=10; i++){
        const power = power_fn(base)
        console.log(power)
    }
}

console.log(table_of_powers(5, fourth))
console.log(table_of_powers(11, (x)=>{return Math.sqrt(x)})) // I just created in line the funct I need to pass as arg
console.log(table_of_powers(11, x => Math.sqrt(x))) // just an expression

// I can put inside the object a function
const person_1 = {
    first_name: 'Fulvio',
    last_name: 'Corno',
    address: {
        city: 'Turin',
        street: 'Corso Duca degli Abruzzi',
        number: 24,
        post_code: 10129
    },
    print_address: function() {
        console.log(this.address.street + ", " + this.address.city + " (" + this.address.post_code + ")")
    }
}

function Person(name, last, city, street, number, postcode) {
    this.first_name = name
    this.last_name = last
    this.address = {
        street: street,
        city: city,
        number: number,
        postcode: postcode
    },
    this.print_address = function() {
        console.log(this.address.street + ", " + this.address.city + " (" + this.address.postcode + ")")
    }
}

const person1 = new Person("F", "C", "T", "D", 24, 10129)

console.log(person1)
person1.print_address()
console.log()