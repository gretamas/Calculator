$(document).ready(function() {
    const $screen = $(".calculator__screen span");
    const $buttons = $('button');

    let operand1 = '';
    let operator = '';
    let operand2 = '';
    let calculatorOn = true; 

    function calculation(operand1, operator, operand2) {
        let result = '';
        if (operator === "+") {
            result = operand1 + operand2;
        } else if (operator === "-") {
            result = operand1 - operand2;
        } else if (operator === "%") {
            result = operand1 % operand2;
        } else if (operator === "*") {
            result = operand1 * operand2;
        } else if (operator === "÷") { 
            result = operand1 / operand2;
        }
        return result;
    }

    function clearCalculator() {
        operand1 = '';
        operator = '';
        operand2 = '';
        $screen.text('');
    }

    $buttons.on("click", function() {
        const buttonValue = $(this).text();
        if (calculatorOn && buttonValue !== "On" && buttonValue !== "Off") { 
            if ("+-*÷%".includes(buttonValue)) {
                operator = buttonValue;
            } else if (buttonValue === "=") {
                if (operand1 !== '' && operator !== '' && operand2 !== '') {
                    let result = calculation(parseFloat(operand1), operator, parseFloat(operand2));
                    $screen.text(result);
                    operand1 = result; 
                    operator = ''; 
                    operand2 = ''; 
                }
            } else if (buttonValue === "CE") { 
                clearCalculator();
            } else {
                if (operator === '') {
                    operand1 += buttonValue;
                } else {
                    operand2 += buttonValue;
                }
            }
            $screen.text(operand1 + operator + operand2);
        }
        if (buttonValue === "OFF") { 
            calculatorOn = false;
            clearCalculator(); 
        } else if (buttonValue === "ON") { 
            clearCalculator(); 
            calculatorOn = true;
        }
    });
});

