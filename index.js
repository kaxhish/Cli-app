let readlineSync = require("readline-sync");
let que = readlineSync.question("what's your name")
let score = 0

console.log(`Hello ${que}`)
console.log("I want to sure if you are really my friend")

let questions = [{
  quesone: `what is my nickname \n a:kashish \n b:guddu \n c:ishi \n d:priya`,
  ansone: "b"
},
{
  quesone: "What will i choose as my steam next year\n a:non-medical \n b:arts \n c:commerce \n d:medical",
  ansone: "d"
},
{
  quesone: "What is my cup of tea \n a:programming \n b:study \n c:yoga \n d:tree plantation",
  ansone: "c"
},
{
  quesone: "I am belive in religiosness \n a:yes \n b:no \n c:both \n d:never",
  ansone: "a"
}]




for (let i = 0; i < questions.length; i++) {
  function quiz(ques, ans) {
    let question = readlineSync.question(ques)
    if (question == ans) {
      console.log("right")
      score = score + 1
    } else if (question == !ans) {
      console.log("you dont know me")
      score = score - 1
    }
  }
}

quiz(questions[0].quesone, questions[0].ansone)
quiz(questions[1].quesone, questions[1].ansone)
quiz(questions[2].quesone, questions[2].ansone)
quiz(questions[3].quesone, questions[3].ansone)

console.log(`Your!!Total score: ${score}`)
if (score === 4 || 3) {
  console.log(`you are really my best friend ${que}`)
} else {
  console.log(`you are not my best friend ${que}`)
}