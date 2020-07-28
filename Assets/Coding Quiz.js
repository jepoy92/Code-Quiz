var questions = [
    {
    prompt: "What is Javascript?(d) It is a free, open-source software using the permissive MIT License that's used in the majority of front-end developer work.",
    answer: {
        a: "A scripting or programming language that allows you to implement complex features on web pages",
        b: "A cascading style sheet used to manipulate HTML code",
        c: "A secret menu item from Starbucks",
        d: "A library of code designed to simpfly HTML DOM tree traversal"
    },
    correctAnswer:"a"
} ,
{
    prompt: "What is const?",
    answer: {
        a: "A shorthand for 'continue' in video games",
        b: "Any variable that if declared can be updated or changed within the whole window",
        c: "A variable that once declared can not be redecalred within the whole window",
        d: "A variable that if declared can be updated or redeclared within the window but not inside its scope "
    },
    correctAnswer: "c"
} ,
{
    prompt: "What is the correct html code to insert a line break?",
    answer: {
        a: "<break>",
        b: "<lb>",
        c: "<bread>",
        d: "<br>"
    },
    correctAnswer: "d"
} ,
{
    prompt: "What is console.log?",
    answer: {
        a: "It logs the innerworkings of your code",
        b: "It logs the list of consoles you own SONY4LYFE",
        c: "It outputs a message to the web console for whatever value you choose",
        d: "A js method that pulls up an element by whatever class or Id you choose"
    },
    correctAnswer: "c"
} ,
{
    prompt: "How do you create a function in JS?",
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
startBtn.addEventListener("click", startGame);
var answerChoices = document.getElementById("answer-choices")
var score = 0;
var insertQuestions = document.getElementById("questions");
var insertAnswers = document.getElementsByClassName("answer-btns");
var showTime = document.getElementById("timer");
var secondsLeft = 60;
var yourResults = document.getElementsByClassName("results")

function startGame() {
    startBtn.classList.add("hide");
    answerChoices.classList.remove("hide");
    countdown();
    for (var i =0; i < questions.length; i++) {
        var currentQuestion = Math.floor(Math.random()*questions.length)
        insertQuestions.innerText = questions[currentQuestion].prompt 
    }
    // for(var i =0; i<questions.length; i++) {
    //     insertQuestions.innerText = questions[i].prompt
    //     insertAnswers.innerText = questions[i].prompt
    //     // // event.stopPropagation()
    //     let response = prompt(questions[i].prompt)
    //     if (response == questions[i].answer){
    //         score ++
    //         alert("correct")
    //     }else {
    //         alert("wrong")
    //     }
    // }
    console.log(countdown);
}

function countdown() {
    var secondsInterval = setInterval(function() {
        secondsLeft--;
        showTime.textContent = secondsLeft + " seconds left";
    
        if(secondsLeft === 0) {
          clearInterval(secondsInterval);
          sendMessage();

        }
      }, 1000);
}

function nextQuestion() {

}

function decreaseTime() {

}
