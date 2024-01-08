const body = document.querySelector("body");
const oneBtn = document.querySelector()

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
