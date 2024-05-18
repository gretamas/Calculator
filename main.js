const screen = document.querySelector(".calculator__screen span");
const buttons = document.querySelectorAll('button');

let operand1 = '';
let operator = '';
let operand2 = '';
let calculatorOn = true; 

function calculation(operand1, operator, operand2) {
    let result = '';
    switch (operator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '%':
            result = operand1 % operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '÷':
            if(operand2 === 0){
                result= "Error"
            }else{
                result = operand1 / operand2;
            }
            break;
        default:
            result = 'Invalid operator';
    }
    return result;
}


function clearCalculator() {
    operand1 = null;
    operator = '';
    operand2 = null;
    screen.textContent = '';
}

function updateScreen() {
    screen.textContent = operand1 + operator + operand2;
}

function clearCalculator() {
    operand1 = '';
    operator = '';
    operand2 = '';
    screen.textContent = '';
}

function turnOnOff (buttonValue){
    if (buttonValue === "OFF") { 
        calculatorOn = false;
        clearCalculator(); 
    } else if (buttonValue === "ON") { 
        clearCalculator(); 
        calculatorOn = true;
    }
}


buttons.forEach(button => {
    button.addEventListener("click", function() {
        const buttonValue = this.textContent;
        if (calculatorOn && buttonValue !== "On" && buttonValue !== "Off") { 
            if ("+-*÷%".includes(buttonValue)) {
                operator = buttonValue;
            } else if (buttonValue === "=") {
                if (operand1 !== '' && operator !== '' && operand2 !== '') {
                    let result = calculation(parseFloat(operand1), operator, parseFloat(operand2));
                    screen.textContent = result;
                    operand1 = result; 
                    operator = ''; 
                    operand2 = ''; 
                }
            } else if (buttonValue === "CE") { 
                clearCalculator();
            } else {
                if (operator === '') {
                    operand1 += buttonValue;
                    operand1 = operand1.trim();
                } else {
                    operand2 += buttonValue;
                    operand2 = operand2.trim();
                }
            }
            updateScreen();
        }
        turnOnOff(buttonValue);
    });
});
