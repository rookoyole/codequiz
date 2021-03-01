// We access the <body> element by using `document.body`
var body = document.body;

// select all elements
var timer = document.getElementById("timer");
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var selectA = document.getElementById("A");
var selectB = document.getElementById("B");
var selectC = document.getElementById("C");
var selectD = document.getElementById("D");
var result = document.getElementById("result");
var card = document.getElementById("card");
var inputGroup = document.getElementById("input-group");
var labelEl = document.getElementById("enter");
var list = document.getElementById("list");
var goBack = document.getElementById("goBack");
var clear = document.getElementById("clear");

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
var timeLeft = 75;
var score = 0;

// Create buttons for question
var b1Q1 = document.createElement("BUTTON");
var b1Q2 = document.createElement("BUTTON");
var b1Q3 = document.createElement("BUTTON");
var b1Q4 = document.createElement("BUTTON");
var b1Sub = document.createElement("BUTTON");
var backBut = document.createElement("BUTTON");
var clearBut = document.createElement("BUTTON");

var h1Init = document.createElement('h1');
var h3Init = document.createElement('h3');
var inputEl = document.createElement("INPUT");
var hsEl = document.createElement("h1");
var newScore = document.createElement("ol");
var initials;

var h1Start = document.createElement('h1');
// We add text by using the `textContent` property
h1Start.textContent = 'Coding Quiz Challenge';
// Append the newly created element to the DOM using `appendChild()`
start.appendChild(h1Start);
// Create header for starting information
var h3Start = document.createElement('h3');
h3Start.textContent =
'Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize you score/time by ten seconds!';
start.appendChild(h3Start);
// Create start button
var b1Start = document.createElement("BUTTON");
// Add text to button and append to div
b1Start.textContent = "Start Quiz";
start.appendChild(b1Start);

// Start quiz
function startQuiz(){
    countdown();
    start.style.display = "none";
    showButtons();
}

// Show question buttons
function showButtons() {
    var q = questions[currentQuestion];
    question.innerHTML = "<h1>"+ q.question +"</h1>";
    // Create 4 buttons to select from
    b1Q1.textContent = "1. " + q.selectA;
    selectA.appendChild(b1Q1);
    b1Q2.textContent = "2. " + q.selectB;
    selectB.appendChild(b1Q2);
    b1Q3.textContent = "3. " + q.selectC;
    selectC.appendChild(b1Q3);
    b1Q4.textContent = "4. " + q.selectD;
    selectD.appendChild(b1Q4);
}

// Timer that counts down from 75 seconds
function countdown() {
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
      
        //while (!(currentQuestion === lastQuestion)) {
          
      
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
            }
        //}
    }, 1000);
    //timer.textContent = '';
    //clearInterval(timeInterval);
}

function checkAnswer(answer){
    if (answer == questions[currentQuestion].correct) {
        // Message indicating the answer is correct
        answerIsCorrect();
    } else {
        timeLeft = timeLeft - 10;
        // Message indicating the answer is wrong
        answerIsWrong();
    }
    if (currentQuestion < lastQuestion) {
        currentQuestion++;
        showButtons();
    } else {
        // end the quiz and show the score
        clearInterval(timer);
        //debugger;
        quiz.style.display = "none";
        finalScore();
    }
}

// answer is correct
function answerIsCorrect(){
    result.textContent = 'Correct!';
    document.getElementById("result").style.borderStyle = "solid none none none";
    document.getElementById("result").style.borderWidth = "thin";
    document.getElementById("result").style.borderColor = "gray";
}

// answer is Wrong
function answerIsWrong(){
    result.textContent = 'Wrong!';
    document.getElementById("result").style.borderStyle = "solid none none none";
    document.getElementById("result").style.borderWidth = "thin";
    document.getElementById("result").style.borderColor = "gray";
}

// Show final score and submit initials
function finalScore() {
    h3Init.textContent = 'Your final score is ' + timeLeft + '.';
    score = timeLeft;
    localStorage.setItem('score', score);
    card.prepend(h3Init);
    h1Init.textContent = 'All Done!';
    card.prepend(h1Init);

    labelEl.textContent = 'Enter Initials: ';
    inputGroup.appendChild(labelEl);
    
    inputGroup.appendChild(inputEl);
    inputEl.setAttribute("type", "text");
    inputEl.setAttribute("name", "initials");
    inputEl.setAttribute("id", "initials");

    b1Sub.textContent = "Submit";
    submit.appendChild(b1Sub);
}




  
// Scores page
function highScores(){
    quiz.style.display = "none";
    card.style.display = "none";

    hsEl.textContent = 'High Scores';
    highScore.prepend(hsEl);

     // Retrieve the last email and password from localStorage using `getItem()`
    newScore.textContent = "1. " + localStorage.getItem('initials') + " - " + localStorage.getItem('score');
    list.appendChild(newScore);

    // Create final buttons
    backBut.textContent = "Go Back";
    goBack.appendChild(backBut);
    clearBut.textContent = "Clear High Scores";
    clear.appendChild(clearBut);
}

b1Start.addEventListener("click",startQuiz);

b1Sub.addEventListener('click', function(event) {
    event.preventDefault();
    initials = document.querySelector('#initials').value;
    localStorage.setItem('initials', initials);
    highScores();
});


