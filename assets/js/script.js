// We access the <body> element by using `document.body`
var body = document.body;

// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// Creating variables for tracking elements

var lastQuestion = questions.length - 1;
var runningQuestion = 0;
var count = 0;
var questionTime = 10; // 10s
var gaugeWidth = 150; // 150px
var gaugeUnit = gaugeWidth / questionTime;
var TIMER;
var score = 0;

// create our questions
var questions = [
    {
        question : "How is everything treated in HTML DOM?",
        //correct = A
        choiceA : "Node",
        choiceB : "Attributes",
        choiceC : "Elements",
        correct : "Arrays"
    },{
        question : "How are the objects organized in the HTML DOM?",
        //correct = c
        choiceA : "Class-wise",
        choiceB : "Queue",
        choiceC : "Hierarchy",
        correct : "Stack"
    },{
        question : "Which of the following is a type of HTML DOM?",
        //correct = d
        choiceA : "Legacy DOM",
        choiceB : "W3C DOM",
        choiceC : "IE4 DOM",
        correct : "All of the above"
    },{
        question : "What is the purpose of the Attr object in the HTML DOM?",
        //correct = b
        choiceA : "Used to focus on a particular part of the HTML page",
        choiceB : "HTML Attribute",
        choiceC : "Used to arrange elements",
        correct : "CSS attribute"
    },{
        question : "What is the reason for avoiding the attributes property in the HTML DOM?",
        //correct = b
        choiceA : "Found unnecessary",
        choiceB : "Attributes don’t have attributes",
        choiceC : "Attributes have attributes",
        correct : "Considered irrelevant"
    }
];

var h1Start = document.createElement('h1');
// We add text by using the `textContent` property
h1Start.textContent = 'Coding Quiz Challenge';
// Append the newly created element to the DOM using `appendChild()`
start.appendChild(h1Start);

var h3Start = document.createElement('h3');
h3Start.textContent =
  'Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize you score/time by ten seconds!';
start.appendChild(h3Start);

var b1Start = document.createElement("BUTTON");
var b1StartText = document.createTextNode("Start Quiz");
// Add text to button
b1Start.appendChild(b1StartText);
start.appendChild(b1Start);

/*
// Start quiz
function startQuiz(){
    start.style.display = "none";
    showQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// Show a question function
function showQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz);



// Starts quiz with first button click
b1E1.addEventListener('click', function() {
    // Remove Start heading and button
    h3El.remove();
    b1E1.remove();
    
    h1El.textContent = '1st question';
    
    divEle.setAttribute('style', 'margin:auto; width:50%; text-align:left;');

    var b1Q1 = document.createElement("BUTTON");
    var b1Q1Text = document.createTextNode("Answer 1");
    b1Q1.style.padding = "8px 15px";
    b1Q1.style.margin = "24px";
    b1Q1.style.cursor = "pointer";
    b1Q1.style.fontSize = "20px";
    b1Q1.style.backgroundColor = "#247BA0";
    b1Q1.style.color = "white";
    b1Q1.style.borderRadius = "8px";

    // Add text to button
    b1Q1.appendChild(b1Q1Text);
    // Add button to div
    divEle.appendChild(b1Q1);
    // Add div to body
    body.appendChild(divEle);
});
*/
