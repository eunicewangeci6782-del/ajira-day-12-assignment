
// =====================================
// DAY 7: JAVASCRIPT FUNDAMENTALS
// =====================================


// LESSON 1: VARIABLES

const learnerName = "Eunice Wangeci";

let learningDay = 7;

const isLearningJavaScript = true;

console.log(learnerName);
console.log(learningDay);
console.log(isLearningJavaScript);


// LESSON 2: MATHEMATICAL OPERATORS

let firstNumber = 20;
let secondNumber = 10;

console.log(firstNumber + secondNumber);
console.log(firstNumber - secondNumber);
console.log(firstNumber * secondNumber);
console.log(firstNumber / secondNumber);


// LESSON 3: CONDITIONAL STATEMENTS

let learningProgress = 7;

if (learningProgress >= 7) {
    console.log("Congratulations! You have completed Week 1.");
} else {
    console.log("Keep learning. You are making progress!");
}


// LESSON 4: ARRAYS AND LOOPS

const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Git and GitHub"
];

console.log(skills);

for (const skill of skills) {
    console.log("I am learning: " + skill);
}


// LESSON 5: FUNCTIONS AND PARAMETERS

function calculateStudyHours(hoursPerDay, days) {
    return hoursPerDay * days;
}

const totalStudyHours = calculateStudyHours(2, 30);

console.log("My total study hours are: " + totalStudyHours);


// =====================================
// DAY 8: DOM MANIPULATION
// =====================================


// STEP 1: Select HTML elements

const visitorNameInput =
    document.getElementById("visitorName");

const greetButton =
    document.getElementById("greetButton");

const greetingMessage =
    document.getElementById("greetingMessage");


// STEP 2: Create the greeting function

function showGreeting() {

    // Get the visitor's name
    const visitorName = visitorNameInput.value.trim();

    // STEP 3: Validate the input

    if (visitorName === "") {

        greetingMessage.textContent =
            "Please enter your name first.";

        greetingMessage.style.color = "red";

    } else {

        // Display a personalised greeting

        greetingMessage.textContent =
            "Hello " + visitorName +
            "! Welcome to Eunice Wangeci's portfolio.";

        greetingMessage.style.color = "green";

    }
}


// STEP 4: Detect button clicks

if (visitorNameInput && greetButton && greetingMessage) {
    greetButton.addEventListener("click", showGreeting);
} else {
    console.error("One or more greeting HTML elements could not be found.");
}
