var readlineSync = require('readline-sync');

var userName = readlineSync.question('Enter your name! ');
console.log('Hello '+ userName + '! WELCOME TO THE WORLD OF POKEMON !');
console.log('---------------------------------------------------');
console.log('NOTE:');
console.log('You get +1 for each right answer and -1 for each wrong answer');
console.log('---------------------------------------------------');

var score = 0;

function play(question,answer){
  var userAnswer = readlineSync.question(question)
  
  if(userAnswer === answer){
    console.log('Thats right!');
    score = score+1;
  }
  else{
    console.log('That was wrong! Right answer was '+ answer);
    score = score-1;
  }

  console.log('Current score : '+ score);
  console.log('----------------------------------')
}


var questions = [{
  question: " Which was Ash's first pokemon that he actually caught ?  ",
  answer: "Caterpie"
}, {
  question: " Charizard evolves from ? ",
  answer: "Charmaleon"
}, {
  question: " Which was the first league that Ash won ? ",
  answer: "Orange island"
}, {
  question: " Pokemon that has won highest percentage of fights for Ash ? ",
  answer: "Goodra"
}, {
  question: "Why did psyduck held his head ? ",
  answer: "Headache"
}]

for(var i=0; i<questions.length; i++ ){
  var currentQuestion = questions[i];
  
  play(currentQuestion.question,currentQuestion.answer)

}

console.log('YAY! You scored: ' + score);