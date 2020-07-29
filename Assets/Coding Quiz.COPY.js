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
var questionIndex = 0;

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
            startButton.classList.add("hide")
            timer.classList.remove("hide")
            questionsContainer.classList.remove("hide")
        } 
    }, 1000)
    startButton.classList.add("hide")
    timer.classList.remove("hide")
    questionsContainer.classList.remove("hide")
    generateQuestions();
};

// questions = questions
// for (let i = 0; i < questions.length; i++) 
//     console.log(questions[i])

    
function generateQuestions(){
    if(questionIndex < 5) {
        questionIndex = questionIndex + 1
        let q = questions[questionIndex];
        quizQuestions.innerHTML = q.currentQuestion;
        choiceA.innerHTML = q.answer.a;
        choiceB.innerHTML = q.answer.b;
        choiceC.innerHTML = q.answer.c;
        choiceD.innerHTML = q.answer.d;
    } else {
        timer.classList.add("hide")
        questionsContainer.classList.add("hide")
    }   
};

function newQuestion(){
    questionIndex = questionIndex + 1
    if (questionIndex < questions.length+1) {
        var q = questions[questionIndex];
        quizQuestions.innerHTML = q.currentQuestion;
        choiceA.innerHTML = q.answer.a;
        choiceB.innerHTML = q.answer.b;
        choiceC.innerHTML = q.answer.c;
        choiceD.innerHTML = q.answer.d;
    } else results();
    console.log("working") 
};


function checkAnswer (answer) {
    if (answer === questions[questionIndex].correctAnswer) {
        score ++;
        seoncds = seconds += 2;
        generateQuestions();
        // console.log(score);
    } else 
        seconds = seconds -= 2;
        generateQuestions();
}

function submitInitials(){};

console.log(results)

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