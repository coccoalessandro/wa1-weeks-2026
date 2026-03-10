import sqlite from 'sqlite3'

const db = new sqlite.Database('questions.sqlite', (err) => {
    if (err) {
        console.log("Error in opening the Database")
    } else {
        console.log("Database connected succesfully")
        console.log()
    }
})


function getUserNames() {
    return new Promise((resolve, reject) => {
        const sql = "SELECT name FROM user"
        db.all(sql, (err, rows) => {
            if (err) {
                reject(err)
            }else {
                const result = rows.map(row => row.name)
                resolve(result)
            }
        })
    })
}

function getEmailByUserName(userName) {
    return new Promise((resolve, reject) => {
        const sql = "SELECT email FROM user WHERE name = ?"
        db.get(sql, [userName], (err, row) => {
            if (err) {
                reject(err)
            }else {
                // single row or no rows at all
                if (row) {
                    resolve(row.email)
                } else {
                    reject("Unknown user name")
                }
             }
        })
    })
}


// getUserNames().then(u => console.log(u))
// getEmailByUserName("Marco Zeta").then(u => console.log(u))

// retrieve and print all user names and emails

getUserNames().then(names => {
    /*
    const emails = []
    for (const name of names) {
        getEmailByUserName(name).then(mail => {
         console.log(mail)   
         emails.push(mail)
         console.log(emails)
        })
    }
    */
    Promise.all(names.map(name => getEmailByUserName(name))).then(emails => {
        console.log(emails)
    })
})

// now I want to get all the emails

function getAllEmails() {
    return new Promise((resolve, reject) => {
        getUserNames().then(names => {
            Promise.all(names.map(name => getEmailByUserName(name))).then(emails => {
                resolve(emails)
            })
        })
    })
}

async function getAllEmails2() {
    const names = await getUserNames() // awaits waits for the promise to be resolved 
    const emails = []                  // and then executes what comes after that
    for (const name of names) {
        const email = await getEmailByUserName(name)
        emails.push(email)
    }
    return emails
}

console.log("try this")
const result = await getAllEmails2() // if I don't use await, it gives me a Promise as a result, not the 'content' of it
console.log(result)

// the following two functions are equivalent --> both return a promise

/*

async function three() {
    return 3
}

function three() {
    return new Promise((resolve, reject) => {
        return 3
    })
}

*/