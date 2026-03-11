import dayjs from 'dayjs'
import sqlite from 'sqlite3'

const db = new sqlite.Database("questions.sqlite", (err) => {
    if (err) console.log("Error in opening the database.")
    else console.log("Database opened succesfully.")
})

// Constructor functions matching database tables

function User(id, name, email) {
    this.id = id
    this.name = name
    this.email = email
}

function Answer(id, text, author, date, score = 0) {
    this.id = id;
    this.text = text;
    this.author = author;
    this.date = dayjs(date);
    this.score = score;

    this.vote = undefined
}

function Question(id, text, author, date) {
    this.id = id
    this.text = text;
    this.author = author;
    this.date = dayjs(date);
    

    this.getAnswers = function () {
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM answer WHERE questionId == ?"
            db.all(sql, [this.id], (err, rows) => {
                if (err) reject(err)
                else resolve(rows)
            })
        })
    }

    this.addAnswer = function (answer) {
        return new Promise((resolve, reject) => {
            const sql = "INSERT INTO answer(id, text, authorId, date, score, questionId) VALUES (?, ?, ?, ?, ?, ?)"
            db.run(sql, [answer.id, answer.text, answer.author, dayjs(answer.date), answer.score, this.id], (err) => {
                if (err) reject(err)
                else resolve()
            })
        })
    }

    this.voteAnswer = function (id, value) {
        return new Promise((resolve, reject) => {
            let val = 1
            if (value == 'down') val = -1
            const sql = "UPDATE answer SET score = score + ? WHERE id = ?"
            db.run(sql, [val, id], (err) => {
                if (err) reject(err)
                else resolve()
            })
        })
    }
}

// For managing lists of questions

function QuestionList() {
    this.addQuestion = function (question) {
        return new Promise((resolve, reject) => {
            const sql = "INSERT INTO question(id, text, authorId, date) VALUES (?, ?, ?, ?)"
            db.run(sql, [question.id, question.text, question.author, question.date], (err) => {
                if (err) reject(err)
                else resolve()
            })
        })
    }
    
    this.getQuestion = function (id) {
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM question WHERE id = ?"
            db.get(sql, [id], (err, row) => {
                if (err) reject(err)
                else resolve(row)
            })
        })
    }
}

export { User, Question, QuestionList, Answer }