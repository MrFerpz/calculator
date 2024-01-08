const body = document.querySelector("body");
const display = document.querySelector(".display");
display.textContent = "12345";

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

function operate(a, b, operator) {
    switch (operator) {
        case "+":
            add(a,b);
            break
        case "-":
            subtract(a,b);
            break
        case "x":
            multiply(a,b);
            break
        case "÷":
            divide(a,b);
            break
    }
}

// Now I need to add listeners to populate the display.
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


// display.textContent = displayValue;
