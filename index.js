var readlineSync = require('readline-sync')

var userName = readlineSync.question("May I Know Your Good Name Please? ");

console.log('Welcome ' + userName + " Let's see how well you know \'RITESH SINHA\'");

console.log("Here We Go !");
console.log(" ");


var score = 0;
var correctAnswer = 0;
var usernameAndScore = [{
    playerName: "Pratikshya Nayak",
    points: "4"
}]

var questionAnswers = [

    {
        question: "What is my nick name?",
        answer: "Babu"
    },

    {
        question: "What is my fav food?",
        answer: "Dahi baigan"
    },

    {
        question: "Do I like rafting?",
        answer: "Yes"
    },

    {
        question: "What is my favourite super hero?",
        answer: "Iron Man"
    },

    {
        question: "Which is my favourite chocolate?",
        answer: "Dairy Milk"
    }

]

for (var i = 0; i < questionAnswers.length; i++) {

    console.log(questionAnswers[i].question);
    var userAnswer = readlineSync.question("Answer: ");

    if (questionAnswers[i].answer.toUpperCase() === userAnswer.toUpperCase()) {
        console.log("You are right!");
        score++;
        correctAnswer++;
        console.log(" ");
    } else {
        console.log("You are Wrong");
        score--;
        console.log(" ");
    }
}

console.log("Thank You ! You gave " + correctAnswer + " Out Of " + questionAnswers.length + " Right Answers " + ". Your Score is " + score)

console.log("The high score is " + usernameAndScore[0].points + " Scored by " + usernameAndScore[0].playerName)

console.log("Please send the screenshot if you have beaten the high score !")