let num1 = "";
let num2 = "";
let operator = "";
let display = "";

function add(first, second) {
    let sum = first + second;
    display = sum;
    return sum;
}

function subtract(first, second) {
    let minus = first - second;
    display = minus;
    return minus;
}

function multiply(first, second) {
    let product = first * second;
    display = product;
    return product;
}

function divide(first, second) {
    if (second === 0) {
        displayPanel.textContent = "really bro";
        return NaN;
    }

    let divided = first / second;
    display = divided;
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

let operatorClicked = false;
const displayPanel = document.querySelector(".display");
const numberBtns = document.querySelectorAll('.calc-btn');
const operatorBtns = document.querySelectorAll(".operator-btn");
const equalBtn = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear");
const negativeBtn = document.querySelector(".negative");
const dotBtn = document.querySelector(".dot");
const percentBtn = document.querySelector(".percent");

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

    let result = parseFloat(operate(Number(num1), operator, Number(num2)).toFixed(1));
    displayPanel.textContent = result;

    num1 = "";
    num2 = "";
    operator = "";
    operatorClicked = false;
})

clearBtn.addEventListener("click", () => {
    displayPanel.textContent = "0";
    num1 = "";
    num2 = "";
})

negativeBtn.addEventListener("click", () => {
    if (!num2) {
        num1 *= -1;
        displayPanel.textContent = num1;
    } else {
        num2 *= -1;
        displayPanel.textContent = num2;
    }
})

dotBtn.addEventListener("click", () => {
    if (!num2) {
        num1 = num1 + ".";
        displayPanel.textContent = num1;
    } else {
        num2 = num2 + ".";
        displayPanel.textContent = num2;
    }
})

percentBtn.addEventListener("click", () => {
    if (!num2) {
        num1 /= 100;
        displayPanel.textContent = num1;
    } else {
        num2 /= 100;
        displayPanel.textContent = num2;
    }
});