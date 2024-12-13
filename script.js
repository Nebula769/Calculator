// operator sets num1 and = sets num2 and calls the operate function
// clear sets num1 and num2 to null and clears the display
let num1 = null;
let num2 = null;
let curOperator = null;
let lastEvaluated = false;

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator) {
    let displayNum = document.querySelector('.display-input').value;
    const inputField = document.querySelector('.display-input');
    lastEvaluated = true;

    switch (operator) {
        case '+':
            num1 = displayNum;
            curOperator = '+';
            break;

        case '-':
            num1 = displayNum;
            curOperator = '-';
            break;

        case '*':
            num1 = displayNum;
            curOperator = '*';
            break;

        case '/':
            num1 = displayNum;
            curOperator = '/';
            break;
        
        case '=':
            evaluate();
            break;
        
        case 'C':
            num1 = null;
            num2 = null;
            curOperator = null;

            document.querySelector('.display-input').value = '';
            document.querySelector('.display-input').placeholder = '';
            break;
    }

}

function evaluate() {
    if (num1 === null || curOperator === null) {
        return;
    }
    const curNum = document.querySelector('.display-input').value;
    const inputField = document.querySelector('.display-input');
    switch (curOperator) {
        case '+':
            inputField.value = add(parseFloat(num1), parseFloat(curNum));
            break;
        
        case '-':
            inputField.value = subtract(parseFloat(num1), parseFloat(curNum));
            break;

        case '*':
            inputField.value = multiply(parseFloat(num1), parseFloat(curNum));
            break;

        case '/':
            if (curNum === '0') {
                inputField.value = '';
                inputField.placeholder = 'Error: Division by zero lol';
                inputField.placeholder.
                break;
            }
            inputField.value = divide(parseFloat(num1), parseFloat(curNum));
            break;
    }

    curOperator = null;

}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    const buttonText = button.textContent;
    if (buttonText >= "0" && buttonText <= "9") {
        button.addEventListener('click', () => {
            if (lastEvaluated) {
                document.querySelector('.display-input').value = '';
                lastEvaluated = false;
            }
            const displayInput = document.querySelector('.display-input');
            const displayText = displayInput.value;
            displayInput.value = displayText + buttonText;
        });
    } else if (button.classList.contains('op-button')) {
        button.addEventListener('click', () => {
            operate(buttonText);
        });
        
    } else if (buttonText === 'C' || buttonText === '=') {
        // for C and = operators
        button.addEventListener('click', () => {
            if (buttonText === 'C') {
                operate(buttonText);
               
            } else if (buttonText === '=') {
                operate(buttonText);
               
            }
        });

    }
    


});