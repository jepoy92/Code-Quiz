var questions = [
    {
    currentQuestion: "What is Javascript?",
    answer: {
        a: "A scripting or programming language that allows you to implement complex features on web pages",
        b: "A cascading style sheet used to manipulate HTML code",
        c: "A secret menu item from Starbucks",
        d: "A library of code designed to simpfly HTML DOM tree traversal"
    },
    correctAnswer:"a"
} ,
{
    currentQuestion: "What is const?",
    answer: {
        a: "A shorthand for 'continue' in video games",
        b: "Any variable that if declared can be updated or changed within the whole window",
        c: "A variable that once declared can not be redecalred within the whole window",
        d: "A variable that if declared can be updated or redeclared within the window but not inside its scope "
    },
    correctAnswer: "c"
} ,
{
    currentQuestion: "What is the correct html code to insert a line break?",
    answer: {
        a: "<break>",
        b: "<lb>",
        c: "<bread>",
        d: "<br>"
    },
    correctAnswer: "d"
} ,
{
    currentQuestion: "What is console.log?",
    answer: {
        a: "It logs the innerworkings of your code",
        b: "It logs the list of consoles you own SONY4LYFE",
        c: "It outputs a message to the web console for whatever value you choose",
        d: "A js method that pulls up an element by whatever class or Id you choose"
    },
    correctAnswer: "c"
} ,
{
    currentQuestion: "How do you create a function in JS?",
    answer: {
        a: "funtion: myFunction",
        b: "function myFunction",
        c: "function (myFunction)",
        d: "Conjunction junction, what's your function?"
    },
    correctAnswer: "b"
} ,
];

var startBtn = document.getElementById("start-btn");
let insertQuestions = document.getElementById("questions");
var answerChoices = document.getElementById("answer-choices");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var score = 0;
var curentScore = document.getElementById("currentScore")
var showTime = document.getElementById("timer");
var timeLeft = document.getElementById("seconds");
var secondsLeft = 60;
var yourResults = document.getElementsByClassName("results");
let lastQuestionIndex = (questions.length-1);
let runningQuestionIndex = 0; 
let shuffledQuestions, currentQuestionIndex;

console.log(questions)

function startGame() {
    startBtn.classList.add("hide");
    answerChoices.classList.remove("hide");
    insertQuestions.classList.remove("hide");
    countdown () ;
    generateQuiz () ;
    checkAnswer () ;
    console.log(score)
    console.log(secondsLeft)
    // for(var i =0; i<questions.length; i++) {
    //     insertQuestions.innerText = questions[i].currentQuestion
    //     insertAnswers.innerText = questions[i].currentQuestion
    //     // // event.stopPropagation()
    //     let response = currentQuestion(questions[i].currentQuestion)
    //     if (response == questions[i].answer){
    //         score ++
    //         alert("correct")
    //     }else {
    //         alert("wrong")
    //     }
    // }
}

function generateQuiz (){
    let q = questions[runningQuestionIndex];
    insertQuestions.innerHTML = "<p>" + q.currentQuestion + "</p>";
    choiceA.innerHTML = q.answer.a;
    choiceB.innerHTML = q.answer.b;
    choiceC.innerHTML = q.answer.c;
    choiceD.innerHTML = q.answer.d;
    console.log(q)
}

function checkAnswer (answer) {
    if(answer == questions[runningQuestionIndex].correctAnswer) {
        score ++
        console.log(score)
    } else if {
        newSecondsLeft = (secondsLeft - 5) 
        console.log(secondsLeft)
    }
}

function countdown() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeLeft.innerHTML = secondsLeft + " seconds left till colorsplosion.";
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
      }
  
    }, 1000);
    console.log(secondsLeft)
  }

// function decreaseTime() {
//     decreasedSecondsLeft = countdown() 
// }
function nextQuestion() {
}

// function countScore(answer) {
//     if(questions[runningQuestionIndex].correctAnswer == answer) {
//         score ++
//     } else {
//         secondsLeft - 5
//     }
// }

function nextQuestion() {

}

// function decreaseTime() {
//     secondsLeft - 5
// }
startBtn.addEventListener("click", startGame);
