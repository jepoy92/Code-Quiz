var questionsContainer = document.getElementById("questions-container");
var quizQuestions = document.getElementById("quizQuestions")
let choiceA = document.getElementById("A");
let choiceB = document.getElementById("B");
let choiceC = document.getElementById("C");
let choiceD = document.getElementById("D");
var startContainer = document.getElementsByClassName("start");
var startButton = document.getElementById("start-btn")
var timer = document.getElementById("timer");
var secondsLeft = document.getElementById("secondsLeft");
var results = document.getElementsByClassName("results");
var currentScore = document.getElementById("currentScore");
var logScore = document.getElementById("initials");
var submittedScores = document.getElementById("submittedScores")
var inputtedInitials = document.getElementById("inputtedInitials")
var submittedScore = document.getElementById("submittedScore")
var showResults = document.getElementById("showResults")
var highScoresSpan = document.getElementById("highScores")
var scoreBoard = document.getElementById("scoreBoard")
var submitForm = document.getElementById("submitScore")
var score = 0;
var seconds = 10000;
var questionIndex = 6;
var addToScoreboard = [];

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
    currentQuestion: "Which of the following answers is true of 'const', 'let', and 'var' once they're assigned?",
    answer: {
        a: "'const' can never be re-declared and updated, 'let' can only be re-assigned within a function, and 'var' can only be assigned within a function",
        b: "'const' can never be re-declared and updated, 'let' can be updated but not re-declared, and 'var' can only be assigned within a function",
        c: "They're variables you can spell out in alphabet soup ",
        d: "'const' can never be re-declared and updated, 'let' can be updated but not re-declared, and 'var' can be re-declared and updated throughout the document"
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
    currentQuestion: "How do you code a 'for' loop?",
    answer: {
        a: "for(var i = 0; i < array.length; i++){\n const element = array[i]",
        b: "for(var = i; i < array.length; i++){\n const element = array[i]",
        c: "for(var = i; i < 0; i++){\n const element = array[i]",
        d: "forget to add 'get' to forget and then do it a bunch of times"
    },
    correctAnswer: "a"
} ,
{
    currentQuestion: "What would console.log(rgb[1]) for var rgb = ['red', 'green', 'blue']; print to the console screen?",
    answer: {
        a: "red",
        b: "blue",
        c: "green",
        d: "yellow"
    },
    correctAnswer: "c"
} ,
];

function startGame(){
    secondsLeft.innerText = seconds
    var timeInterval = setInterval(function(){
        seconds --
        secondsLeft.innerText = seconds
        if (seconds === 0 ){
            clearInterval(timeInterval);
            timer.classList.add("hide")
            questionsContainer.classList.add("hide")
        } 
    }, 1000)
    startButton.classList.add("hide")
    timer.classList.remove("hide")
    questionsContainer.classList.remove("hide")
    generateQuestions();
};

    
function generateQuestions(){
    if(questionIndex > 0) {
        questionIndex = questionIndex  - 1
        quizQuestions.innerHTML = questions[questionIndex].currentQuestion;
        choiceA.innerHTML = questions[questionIndex].answer.a;
        choiceB.innerHTML = questions[questionIndex].answer.b;
        choiceC.innerHTML = questions[questionIndex].answer.c;
        choiceD.innerHTML = questions[questionIndex].answer.d;
        console.log(questionIndex)
            } else{
        timer.classList.add("hide")
        questionsContainer.classList.add("hide")
    }   
};

function checkAnswer (answer) {
    if (answer === questions[questionIndex].correctAnswer) {
        score ++;
        seoncds = seconds += 2;
        generateQuestions();
    } else 
        seconds = seconds -= 4;
        generateQuestions();
}

startButton.addEventListener("click", startGame);

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

renderLastHighscore();

appendHighScores();

function appendHighScores() {
  scoreBoard.innerText = "";

  for (var i = 0; i < addToScoreboard.length; i++) {
    var newScore = addToScoreboard[i] + ;

    var p = document.createElement("p");
    p.textContent = newScore;
    scoreBoard.append(p);
    console.log(p);
  }
}

submitForm.addEventListener("submit", function(event) {
    event.preventDefault();
  
    var submitText = inputtedInitials.value.trim();
  
    // Return from function early if submitted todoText is blank
    if (submitText === "") {
      return;
    }
  
    // Add new todoText to todos array, clear the input
    addToScoreboard.push(submitText);
    inputtedInitials.value = "";
  
    // Re-render the list
    appendHighScores();
    renderLastHighscore();
    console.log(appendHighScores)
  });

function renderLastHighscore() {
  var initials = localStorage.getItem("initials");

  if (!initials) {
    return;
  }
  
  scoreBoard.textContent = initials + score;
  appendHighScores();
}