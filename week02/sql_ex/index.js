import sqlite from 'sqlite3'

const db = new sqlite.Database("data.sqlite", (err) => {
    if (!err) {
        console.log("DB opened successfully")
        console.log(db)
    } else {
        console.log(err)
        console.log(db)
        }
     } )



db.all("SELECT name FROM users", (err, rows) => {
    if (err)
        console.log(err)
    else
        console.log(rows)
})


db.get("SELECT name FROM users", (err, row) => { 
    if (err)
        console.log(err)
    else
        console.log(row)
})

// if the query produced no result --> undefined

db.each("SELECT name FROM users", (err, row) => { // each is the same as get but if there are more                                                   
    if (err)                                      // than one el it's called multiple times
        console.log(err)
    else
        console.log(row)
})


const names = new Promise( (resolve, reject) => { // Promise is used to extract the result of a query
    db.all("SELECT name FROM users", (err, rows) => {
        if (err)
            reject(err)
        else {
            resolve(rows.map(r => r.name))

            // imagine reject as an exception thrown and resolve as a return
        }
    })
})

// here names contains NOTHING but I can get the value of it by using then/catch

names.then((result) => console.log(result))
    .catch(err => console.log(err))



