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

let a;
let b;
let operator = "";
let displayValue = "";

// Now I need to add listeners to allow you to populate the display.
zeroBtn.addEventListener("click", () => display.textContent += "0");
oneBtn.addEventListener("click", () => display.textContent += "1");
twoBtn.addEventListener("click", () => display.textContent += "2");
threeBtn.addEventListener("click", () => display.textContent += "3");
fourBtn.addEventListener("click", () => display.textContent += "4");
fiveBtn.addEventListener("click", () => display.textContent += "5");
sixBtn.addEventListener("click", () => display.textContent += "6");
sevenBtn.addEventListener("click", () => display.textContent += "7");
eightBtn.addEventListener("click", () => display.textContent += "8");
nineBtn.addEventListener("click", () => display.textContent += "9");
decimalBtn.addEventListener("click", () => display.textContent += ".");

// Now I need to add logic for the operator buttons
// I should store a value when they are clicked as "a"

addBtn.addEventListener("click", () => {
    a = Number(display.textContent);
    display.textContent += " + ";
    operator = "+";
})

subtractBtn.addEventListener("click", () => {
    a = Number(display.textContent);
    display.textContent += " - ";
    operator = "-";
})

multiplyBtn.addEventListener("click", () => {
    a = Number(display.textContent);
    display.textContent += " x ";
    operator = "x";
})

divideBtn.addEventListener("click", () => {
    a = Number(display.textContent);
    display.textContent += " ÷ ";
    operator = "÷";
})

equalsBtn.addEventListener("click", () => {
    switch (operator) {
        case "+":
            array = display.textContent.split(" + ");
            b = Number(array[1]);
            display.textContent = add(a, b);
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
            display.textContent = divide(a, b);
            break
    }})

clearAllBtn.addEventListener("click", () => display.textContent = "");
// display.textContent = displayValue;
