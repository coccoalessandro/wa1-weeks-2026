import { User, Question, QuestionList, Answer } from "./entities.js";

// 1. Test getQuestion

const qList = new QuestionList()
const q = await qList.getQuestion(1)
console.log(q)


// 2. Test getAnswers

const q1 = new Question(q.id, q.text, q.author, q.date)
const answers = await q1.getAnswers()
console.log(answers)

// 3. addQuestion

//const newQuestion = new Question(12, "What's the distance between the Moon and the Earth?", 1, dayjs("2026-03-11"))
//await qList.addQuestion(newQuestion)

// 4. addAnswer

// const newAnswer = new Answer(7, "I don't know", 3, "2026-03-11", 0)
// await q1.addAnswer(newAnswer)


// 5. voteAnswer

// await q1.voteAnswer(1, 'up')
await q1.voteAnswer(1, 'down')