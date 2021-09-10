var readlineSync = require("readline-sync");
let userScore=0;
var scoreboard=
[
  {
    user:"Niharika",
    score:2
  }
]
let HighestScore= scoreboard[0].score;
var userName= readlineSync.question('What is your name? ');
console.log(`Welcome ${userName}! This is Do you know Naman Quiz \nType A or B to choose your answer\n`);

var questionsAndAnswers = 
[
    {
      question:"\nWhere am I from? \nA:Delhi  \nB:Bangalore \nAnswer:",
      answer:"A"
    },
    {
      question:"Which game do I like? \nA:Fortnite \nB:Pubg \nAnswer:",
      answer:"B"
    },
    {
      question:"Am I older than 22?  \nA:Yes \nB:No \nAnswer:",
      answer:"A"
    },
    {
      question:"Am I a DC or Marvel fan? \nA:DC \nB:Marvel \nAnswer:",
      answer:"B"
    },
    {
      question:"What is my favourite color? \nA:Red \nB:Black \nAnswer:",
      answer:"B"
    }
]

function play(question,answer)
{
  var userAnswer= readlineSync.question(question);
  if((userAnswer.toUpperCase())===(answer.toUpperCase()))
  {
    console.log("Correct Answer! :D\n");
    userScore++;
  }
  else
  {
    console.log("Wrong Answer! :(\n");
  }
}

questionsAndAnswers.forEach(currentQuestion=>
{
  play(currentQuestion.question,currentQuestion.answer)
});

console.log(`\n--------------------------------------------------`);
console.log(`Great, you completed the quiz!\nYour final score : ${userScore} \n`);

if(userScore>HighestScore)
{
  console.log("New High Score!!!")
  HighestScore=userScore;
}


console.log(`Highest Score : ${HighestScore}`);
