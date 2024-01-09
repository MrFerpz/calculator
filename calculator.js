const body = document.querySelector("body");
const display = document.querySelector(".display");
display.textContent = "";

// Setting up references to each button

const zeroBtn = document.querySelector("#zeroButton");
const twoBtn = document.querySelector("#twoButton");
const oneBtn = document.querySelector("#oneButton");
const threeBtn = document.querySelector("#threeButton");
const fourBtn = document.querySelector("#fourButton");
const fiveBtn = document.querySelector("#fiveButton");
const sixBtn = document.querySelector("#sixButton");
const sevenBtn = document.querySelector("#sevenButton");
const eightBtn = document.querySelector("#eightButton");
const nineBtn = document.querySelector("#nineButton");
const addBtn = document.querySelector("#addButton");
const subtractBtn = document.querySelector("#subtractButton");
const multiplyBtn = document.querySelector("#multiplyButton");
const divideBtn = document.querySelector("#divideButton");
const equalsBtn = document.querySelector("#equalsButton");
const decimalBtn = document.querySelector("#decimalButton");
const clearAllBtn = document.querySelector("#ACButton");
const clearBtn = document.querySelector("#CButton");
const percentBtn = document.querySelector("#percentButton");

function add(a, b) {
    return (a + b)
}

function subtract(a, b) {
    return (a - b)
}

function multiply(a, b) {
    return (a * b)
}

function divide(a, b) {
    return (a / b)
}

function percent(a, b) {
    return ((a / b) * 100)
}

let a;
let b;
let operator = "";
let displayValue = "";
let recentAnswer;

// Now I need to add listeners to allow you to populate the display.
// Each click checks if you have just completed a calculation.

zeroBtn.addEventListener("click", () => {
    if (recentAnswer === display.textContent) {
        display.textContent = "";}
    display.textContent += "0";})

oneBtn.addEventListener("click", () => {
    if (recentAnswer === display.textContent) {
        display.textContent = "";}
    display.textContent += "1"});

twoBtn.addEventListener("click", () => {
    if (recentAnswer === display.textContent) {
        display.textContent = "";}
    display.textContent += "2"});

threeBtn.addEventListener("click", () => {
    if (recentAnswer === display.textContent) {
        display.textContent = "";}
    display.textContent += "3"});

fourBtn.addEventListener("click", () => {
    if (recentAnswer === display.textContent) {
        display.textContent = "";}
    display.textContent += "4"});

fiveBtn.addEventListener("click", () => {
    if (recentAnswer === display.textContent) {
        display.textContent = "";}
    display.textContent += "5"});
    
sixBtn.addEventListener("click", () => {
    if (recentAnswer === display.textContent) {
        display.textContent = "";}
    display.textContent += "6"});

sevenBtn.addEventListener("click", () => {
    if (recentAnswer === display.textContent) {
        display.textContent = "";}
    display.textContent += "7"});

eightBtn.addEventListener("click", () => {
    if (recentAnswer === display.textContent) {
        display.textContent = "";}
    display.textContent += "8"});

nineBtn.addEventListener("click", () => {
    if (recentAnswer === display.textContent) {
        display.textContent = "";}
    display.textContent += "9"});

decimalBtn.addEventListener("click", () => {
    if (display.textContent.includes(".")) {
        alert("You can't put two decimals in!")
    } else {
    display.textContent += "."}});

// Now I need to add logic for the operator buttons
// I should store a value when they are clicked as "a"

addBtn.addEventListener("click", () => {
    
    if (display.textContent.match(/[+\-x%÷]/g)) {
        resolve()
    }

    a = Number(display.textContent)
    display.textContent += " + ";
    operator = "+";
})

subtractBtn.addEventListener("click", () => {
    
    if (display.textContent.match(/[+\-x%÷]/g)) {
        resolve()
    }
    
    a = Number(display.textContent);
    display.textContent += " - ";
    operator = "-";
})

multiplyBtn.addEventListener("click", () => {
    
    if (display.textContent.match(/[+\-x%÷]/g)) {
        resolve()
    }
    
    a = Number(display.textContent);
    display.textContent += " x ";
    operator = "x";
})

divideBtn.addEventListener("click", () => {
    if (display.textContent.match(/[+\-x%÷]/g)) {
        resolve()
    }
    
    a = Number(display.textContent);
    display.textContent += " ÷ ";
    operator = "÷";
})

percentBtn.addEventListener("click", () => {
    if (display.textContent.match(/[+\-x%÷]/g)) {
        resolve()
    }
    
    a = Number(display.textContent);
    display.textContent += " % ";
    operator = "%";
})

function resolve() {
    switch (operator) {
        case "+":
            array = display.textContent.split(" + ");
            b = Number(array[1]);
            display.textContent = add(a,b);
            break
        case "-":
            array = display.textContent.split(" - ");
            b = Number(array[1]);
            display.textContent = subtract(a, b);
            break
        case "x":
            array = display.textContent.split(" x ");
            b = Number(array[1]);
            display.textContent = multiply(a, b);
            break
        case "÷":
            array = display.textContent.split(" ÷ ");
            b = Number(array[1]);
            if (b === 0) alert("Stop trying to divide by 0.");
            display.textContent = divide(a, b);
            break
        case "%":
            array = display.textContent.split(" % ");
            b = Number(array[1]);
            display.textContent = percent(a, b);
            break
}

if (display.textContent.includes(".")) {
    let rounded = Math.round(Number(display.textContent) * 10000)/10000;
    display.textContent = rounded;
}}

equalsBtn.addEventListener("click", resolve);

equalsBtn.addEventListener("click", () => {
    recentAnswer = display.textContent;
})

clearAllBtn.addEventListener("click", () => display.textContent = "")

clearBtn.addEventListener("click", () => {
    let newText = display.textContent.slice(0, -1);
    display.textContent = newText;})

// display.textContent = displayValue;

// NEXT TASKS:
// Add functionality to take multiple numbers on.
// - this may take some re-factoring. New way to store a & b (maybe c & d etc),
// Add backspace button functionality.
// Add percentage button functionality.
// Add feature where if you write new numbers after equals, it starts again.
// Make it look pretty!


