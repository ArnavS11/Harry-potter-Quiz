var readlineSync = require('readline-sync');
const chalk = require('chalk');

var score = 0;

var userName = readlineSync.question('What is your name? ');
console.log('Welcome ' + chalk.yellow(userName) + ' to the Harry Potter Quiz!');
console.log(chalk.cyan('For every right answer +1 will be added to score. For wrong answer there will be no change to the score.'));
console.log('-------------------');

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green('Right Answer!'));
    score = score + 1;
  } else {
    console.log(chalk.red('Wrong Answer!'));
  }
  console.log('Current score: ' + score);
  console.log('-------------------');
}

var questionsList = [
  {
    question: "What house is Harry Potter sorted into? ",
    answer: "Gryffindor"
  }, 
  {
    question: "What’s the name of the three-headed dog that guards the door to the Sorcerer’s Stone? ",
    answer: "Fluffy"
  },
  {
    question: "Who is the Half-Blood Prince? ",
    answer: "Snape"
  },
  {
    question: "What does Prof. Lupin offer Harry to make him feel better when the Dementors try to attack him? ",
    answer: "Chocolate"
  },
  {
    question: "Who is the seeker for the Bulgarian Quidditch team? ",
    answer: "Viktor Krum"
  }
];

var highScores = [
  {
    name: "Ashwin",
    score: 5
  },
  {
    name: "Prem",
    score: 4
  }
]

for (var i=0; i<questionsList.length; i++) {
  play(questionsList[i].question, questionsList[i].answer);
}

console.log('YAY! Your final score is: ' + score);
console.log('Check out the high scores, ping me if you\'ve beaten any and I\'ll update it.');

for (var i=0; i<highScores.length; i++) {
  console.log(highScores[i].name + ' : ' + highScores[i].score);
}