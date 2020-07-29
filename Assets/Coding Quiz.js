let choiceA = document.getElementById("")

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
let clickedAnswer = document.getElementById("A" || "B" || "C" || "D")
let shuffledQuestions, currentQuestionIndex;

console.log(questions)

function startGame() {
    startBtn.classList.add("hide");
    answerChoices.classList.remove("hide");
    insertQuestions.classList.remove("hide");
    countdown () ;
    shuffledQuestions = questions.sort(() => Math.random() - .5) ;
    nextQuestion ();
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

clickedAnswer.onclick = checkAnswer ();

function generateQuiz (){
        let q = questions[runningQuestionIndex];
        insertQuestions.innerHTML = "<p>" + q.currentQuestion + "</p>";
        choiceA.innerHTML = q.answer.a;
        choiceB.innerHTML = q.answer.b;
        choiceC.innerHTML = q.answer.c;
        choiceD.innerHTML = q.answer.d;
        console.log(q)}

function checkAnswer (answer) {

    for (var i = 0; i < questions.length; i++)
    if(answer == questions[runningQuestionIndex].correctAnswer) {
        score ++
        console.log(score)
    } else {
        generateQuiz ();
        secondsLeft = (secondsLeft - 5)
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
    generateQuiz(shuffledQuestions[currentQuestionIndex])
}

// function countScore(answer) {
//     if(questions[runningQuestionIndex].correctAnswer == answer) {
//         score ++
//     } else {
//         secondsLeft - 5
//     }
// }



// function decreaseTime() {
//     secondsLeft - 5
// }
startBtn.addEventListener("click", startGame);
