let num1 = "";
let num2 = "";
let operator = "";
let display = "";


//let first = parseInt(prompt("first number"));
//let second = parseInt(prompt("second number"));

function add(first, second) {
    let sum = first + second;
    display = sum;
    console.log(display);
    console.log(sum);
    return sum;
}

function subtract(first, second) {
    let minus = first - second;
    display = minus;
    console.log(display);
    console.log(minus);
    return minus;
}

function multiply(first, second) {
    let product = first * second;
    display = product;
    console.log(display);
    console.log(product);
    return product;
}

function divide(first, second) {
    let divided = first / second;
    display = divided;
    console.log(display);
    console.log(divided);
    return divided;
}

function operate(num1, operator, num2) {
    switch(operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    }
}

// console.log(operate(first, "-", second));

let operatorClicked = false;
const displayPanel = document.querySelector(".display");
const numberBtns = document.querySelectorAll('.calc-btn');
const operatorBtns = document.querySelectorAll(".operator-btn");
const equalBtn = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear");

numberBtns.forEach(button => {
    button.addEventListener("click", () => {
        displayPanel.textContent = "";
        const value = button.textContent;

        if (!operatorClicked) {
            num1 += value;
            displayPanel.textContent = num1;
        } else {
            num2 += value;
            displayPanel.textContent = num2;
        }
    });
});

operatorBtns.forEach(button => {
    button.addEventListener("click", () => {
        const input = button.textContent;
        console.log("Operator clicked: ", input);
        operator = input;
        operatorClicked = true;
    });
});

equalBtn.addEventListener("click", () => {
    console.log("num1: ", num1);
    console.log("num2: ", num2);
    console.log("operator: ", operator);

    let result = operate(Number(num1), operator, Number(num2));
    console.log(result);
    displayPanel.textContent = result;

    num1 = result.toString();
    num2 = "";
    operator = "";
    operatorClicked = false;
})

clearBtn.addEventListener("click", () => {
    displayPanel.textContent = "0";
    num1 = "";
    console.log("Num1 is now: ", num1);
    console.log("Num2 is now: ", num2);
    console.log(operator);
})