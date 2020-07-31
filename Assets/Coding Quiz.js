var questionsContainer = document.getElementById("questions-container");
var scoreBoardContainer = document.getElementById("scoreBoardContainer")
var quizQuestions = document.getElementById("quizQuestions")
var headerContainer = document.getElementsByTagName("headerContainer")
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
var highScoresSpan = document.getElementById("highScoresSpan")
var scoreBoard = document.getElementById("scoreBoard")
var newGame = document.getElementById("newGame")
var submitBtn = document.getElementById("submit")
var yourScore = document.getElementById("yourScore")
var score = 0;
var seconds = 30;
var questionIndex = 11;
var addToScoreboard = [];
var scoreArray = []

var questions = [
    {
    currentQuestion: "Which of the following is the correct way to start wrting a while loop?",
    answer: {
        a: "while( i<10; i++)",
        b: "while( i < 10)",
        c: "while(var i = 0; i < 0; i++",
        d: "while()"
    },
    correctAnswer:"b"
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
{
  currentQuestion: "How do you add an event listener for var btn so that it activates on click?",
  answer: {
      a: "var.addeventlistener('click', function())",
      b: "btn.addeventlistener('click', function())",
      c: "onClick(function()",
      d: "addeventlistener+bar(function())"
  },
  correctAnswer: "b"
} ,
{
  currentQuestion: "How do you create a prompt alert to ask the user what their favorite food is?",
  answer: {
      a: "You poke them and then ask them politely",
      b: "addEventListener('prompt',askFaveFood)",
      c: "function prompt ('What's your favorite food?')",
      d: "prompt('What's your favorite food?')",
  },
  correctAnswer: "d"
} ,
{
  currentQuestion: "How do you write 'Hello World' in an alert box?",

  answer: {
      a: "msg('Hello World');",
      b: "alertBox('Hello World');",
      c: "alert('Hello World');",
      d: "msgBox('Hello World');",
  },
  correctAnswer: "c"
} ,
{
  currentQuestion: "How to write an IF statement for executing some code if 'i' is NOT equal to 5? ",

  answer: {
      a: "if i =! 5",
      b: "if i != 5",
      c: "if i <> 5",
      d: "if i not 5",
  },
  correctAnswer: "b"
} ,
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
];

function startNewGame() {
  secondsLeft.innerText = seconds
  var timeInterval = setInterval(function(){
      seconds --
      secondsLeft.innerText = seconds
      if (seconds <= 0 ){
          clearInterval(timeInterval);
          timer.classList.add("hide")
          questionsContainer.classList.add("hide")
          scoreBoardContainer.classList.remove("hide")
      } 
  }, 1000)
  headerContainer.classList.add("hide")
  startButton.classList.add("hide")
  timer.classList.remove("hide")
  questionsContainer.classList.remove("hide")
  score = 0
  seconds = 30
  questionIndex = 6
  generateQuestions();
  scoreBoardContainer.classList.add("hide")
}

function startGame(){
    secondsLeft.innerText = seconds
    var timeInterval = setInterval(function(){
        seconds --
        secondsLeft.innerText = seconds
        if (seconds <= 0 ){
            clearInterval(timeInterval);
            timer.classList.add("hide")
            questionsContainer.classList.add("hide")
            scoreBoardContainer.classList.remove("hide")
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
        scoreBoardContainer.classList.remove("hide")
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

// renderLastHighscore();

appendHighScores();

function appendHighScores() {
  scoreBoard.innerText = "";

  for (var i = 0; i < localStorage.length; i++) {
    var newScore = localStorage.getItem("scores");
    var scoreP = document.createElement("p");
    scoreP.textContent = newScore;
    scoreBoard.append(scoreP)
    console.log(newScore);
  }
}

submitBtn.addEventListener("click", function(event) {
    event.preventDefault();
  
    var submitText = {
        initials: inputtedInitials.value.trim(),
        score: score
    }
    
    var scoreboardKeeper = {
      initials: submitText.initials,
      scores: submitText.score
    }
    // Return from function early if submitted todoText is blank
    if (submitText === "") {
      return;
    }

    // Add new todoText to todos array, clear the input
    addToScoreboard.push(scoreboardKeeper);
    inputtedInitials.value = "";
    console.log(submitText)
    // Re-render the list

    localStorage.setItem("scores", JSON.stringify(addToScoreboard))
    // localStorage.setItem("score", JSON.stringify(submitText.score))

    appendHighScores();
    // renderLastHighscore();

  });

  newGame.addEventListener("click", startNewGame)
