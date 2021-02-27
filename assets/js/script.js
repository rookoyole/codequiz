// We access the <body> element by using `document.body`
var body = document.body;

// select all elements
var scoreDiv = document.getElementById("scores");
var timer = document.getElementById("timer");
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var selectA = document.getElementById("A");
var selectB = document.getElementById("B");
var selectC = document.getElementById("C");
var selectD = document.getElementById("D");


// create our questions
var questions = [
    {
        question : "How is everything treated in HTML DOM?",
        selectA : "Node",
        selectB : "Attributes",
        selectC : "Elements",
        selectD : "Arrays",
        correct : "A"
    },{
        question : "How are the objects organized in the HTML DOM?",
        selectA : "Class-wise",
        selectB : "Queue",
        selectC : "Hierarchy",
        selectD : "Stack",
        correct : "C"
    },{
        question : "Which of the following is a type of HTML DOM?",
        selectA : "Legacy DOM",
        selectB : "W3C DOM",
        selectC : "IE4 DOM",
        selectD : "All of the above",
        correct : "D"
    },{
        question : "What is the purpose of the Attr object in the HTML DOM?",
        selectA : "Used to focus on a particular part of the HTML page",
        selectB : "HTML Attribute",
        selectC : "Used to arrange elements",
        selectD : "CSS attribute",
        correct : "B"
    },{
        question : "What is the reason for avoiding the attributes property in the HTML DOM?",
        selectA : "Found unnecessary",
        selectB : "Attributes don’t have attributes",
        selectC : "Attributes have attributes",
        selectD : "Considered irrelevant",
        correct : "B"
    }
];

// Creating variables for tracking elements

var lastQuestion = questions.length - 1;
var currentQuestion = 0;
//var count = 0;
//var questionTime = 10; // 10s
//var gaugeWidth = 150; // 150px
//var gaugeUnit = gaugeWidth / questionTime;
//var TIMER;
//var score = 0;

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
// Add text to button and append to div
b1Start.textContent = "Start Quiz";
start.appendChild(b1Start);

b1Start.addEventListener("click",startQuiz);

// Start quiz
function startQuiz(){
    start.style.display = "none";
    showQuestion();
    countdown();
    //TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// Show a question function
function showQuestion(){
    var q = questions[currentQuestion];
    console.log(q);
    question.innerHTML = "<h1>"+ q.question +"</h1>";

    // Create 4 buttons to select from
    var b1Q1 = document.createElement("BUTTON");
    b1Q1.textContent = "1. " + q.selectA;
    selectA.appendChild(b1Q1);
    var b1Q2 = document.createElement("BUTTON");
    b1Q2.textContent = "2. " + q.selectB;
    selectB.appendChild(b1Q2);
    var b1Q3 = document.createElement("BUTTON");
    b1Q3.textContent = "3. " + q.selectC;
    selectC.appendChild(b1Q3);
    var b1Q4 = document.createElement("BUTTON");
    b1Q4.textContent = "4. " + q.selectD;
    selectD.appendChild(b1Q4);
}

// Timer that counts down from 5
function countdown() {
    var timeLeft = 75;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timer.textContent = 'Time: ' + timeLeft;
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timer` to an empty string
        timer.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
        displayMessage();
      }
    }, 1000);
  }
