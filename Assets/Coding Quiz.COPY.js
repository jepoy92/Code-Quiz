var questionsContainer = document.getElementById("questions-container");
var quizQuestions = document.getElementById("quizQuestions")
var answerChoices = document.getElementById("answer-choices");
let choiceA = document.getElementById("A");
let choiceB = document.getElementById("B");
let choiceC = document.getElementById("C");
let choiceD = document.getElementById("D");
var nextButton = document.getElementById("nextButton")
var startContainer = document.getElementsByClassName("start");
var startButton = document.getElementById("start-btn")
var timer = document.getElementById("timer");
var secondsLeft = document.getElementById("secondsLeft");
var results = document.getElementsByClassName("results");
var currentScore = document.getElementById("currentScore");
var logScore = document.getElementById("initials");
var showResults = document.getElementById("showResults")
var score = 0;
var seconds = 60;
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
        a: " <break> ",
        b: " <lb> ",
        c: " <bread> ",
        d: " <br> ",
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

var questionIndex = 0;
let answerIndex = 0;

function startGame(){
    startButton.classList.add("hide")
    timer.classList.remove("hide")
    questionsContainer.classList.remove("hide")
    countdown();
    generateQuestions();
};

function generateQuestions(){
    let q = questions[questionIndex];
    quizQuestions.innerHTML = q.currentQuestion;
    choiceA.innerHTML = q.answer.a;
    choiceB.innerHTML = q.answer.b;
    choiceC.innerHTML = q.answer.c;
    choiceD.innerHTML = q.answer.d;
};

function newQuestion(){
    // let tillLastQuestion = questionIndex+(parseInt(Math.floor(Math.random()*5))) - 
    let newQuestionIndex = questionIndex+Math.floor(Math.random()*5)
    let q = questions[newQuestionIndex];
    for (var i = newQuestionIndex; i < 5; i++)
    quizQuestions.innerHTML = q.currentQuestion;
    choiceA.innerHTML = q.answer.a;
    choiceB.innerHTML = q.answer.b;
    choiceC.innerHTML = q.answer.c;
    choiceD.innerHTML = q.answer.d;
    console.log("working")
};


function checkAnswer (answer) {
    if (answer === questions[questionIndex].correctAnswer) {
        score ++
    } else {
        
    }
}

function submitInitials(){};

function results () {
    showResults.classList.remove("hide")
};

function penalty (seconds) {

}

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", newQuestion);

choiceA.addEventListener("click", function(){
    checkAnswer('a')
})

choiceB.addEventListener("click", function(){
    checkAnswer('b')
})
choiceC.addEventListener("click", function(){
    checkAnswer('c')
})
choiceD.addEventListener("click", function(){
    checkAnswer('d')
})