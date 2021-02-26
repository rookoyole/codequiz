// Change button color on hover
function buttonOver() {
    b1E1.style.backgroundColor = "#d729dd";
    document.body.appendChild(b1E1);
  }

// Change button color leaving a button
function buttonOut() {
    b1E1.style.backgroundColor = "#247BA0";
    document.body.appendChild(b1E1);
  }

// Displays the current count on the page
function setCounterText() {
  countEl.textContent = count;
}// We access the <body> element by using `document.body`
var body = document.body;

// Add a centered h1
// We create HTML elements by passing the element by name to `createElement()`
// and storing the value in a variable
var h1El = document.createElement('h1');

// We add text by using the `textContent` property
h1El.textContent = 'Coding Quiz Challenge';

// We add style by using the `setAttribute()` method
h1El.setAttribute('style', 'font-family:verdana; margin:auto; width:50%; text-align:center;');

// We append the newly created element to the DOM using `appendChild()`
body.appendChild(h1El);

// Add a centered h3
var h3El = document.createElement('h3');
h3El.textContent =
  'Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize you score/time by ten seconds!';
h3El.setAttribute('style', 'font-family:verdana; margin:auto; width:50%; text-align:center;');
body.appendChild(h3El);

//var startButton = document.createElement("BUTTON");
//body.appendChild(startButton);

var b1E1 = document.createElement("BUTTON");
var b1E1Text = document.createTextNode("Start Quiz");
//b1El.setAttribute('style', 'padding:10px; margin:24px; cursor:pointer; font-size:24px; backgroundColor: #247BA0; color:white;');
b1E1.style.padding = "8px 15px";
b1E1.style.margin = "24px";
b1E1.style.cursor = "pointer";
b1E1.style.fontSize = "20px";
b1E1.style.backgroundColor = "#247BA0";
b1E1.style.color = "white";
b1E1.style.borderRadius = "8px";
b1E1.appendChild(b1E1Text);
document.body.appendChild(b1E1);

// Increments the count on click and calls setCounterText()
b1E1.addEventListener("mouseover", buttonOver);
b1E1.addEventListener("mouseout", buttonOut);