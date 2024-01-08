const body = document.querySelector("body");

// Setting up references to each button
const zeroBtn = document.querySelector("#0");
const oneBtn = document.querySelector("#1");
const threeBtn = document.querySelector("#3");
const fourBtn = document.querySelector("#4");
const fiveBtn = document.querySelector("#5");
const sixBtn = document.querySelector("#6");
const sevenBtn = document.querySelector("#7");
const eightBtn = document.querySelector("#8");
const nineBtn = document.querySelector("#9");
const addBtn = document.querySelector("#+");
const subtractBtn = document.querySelector("#-");
const multiplyBtn = document.querySelector("#x");
const divideBtn = document.querySelector("#÷");
const equalsBtn = document.querySelector("#=");
const decimalBtn = document.querySelector("#.");
const clearAllBtn = document.querySelector("#AC");
const clearBtn = document.querySelector("#C");
const percentBtn = document.querySelector("#%");

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

let display = document.querySelector(".display");
display.textContent = "yeah";
