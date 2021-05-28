var expression = [];
var index = 0;
var currentNumber = "";

function clean() {
    document.getElementById('input_field').value = ""
    expression = [];
    index = 0;
    currentNumber = "";
}

function number(num) {
    document.getElementById('input_field').value += num;
    currentNumber += num;
}

function dott() {

    if (document.getElementById('input_field').value == "") {
        return;
    }

    if (!currentNumber.includes(".") && currentNumber != "") {
        currentNumber += ".";
        document.getElementById('input_field').value += ".";
    }
}

function operator(op) {    

    if (document.getElementById('input_field').value == "") {
        return;
    }

    if (currentNumber == "") {
        var oldval = document.getElementById('input_field').value;
        document.getElementById('input_field').value = oldval.replaceAt(oldval.length - 1, op);
        expression[--index] = op;
    } else {
        document.getElementById('input_field').value += op;
        expression[index] = currentNumber;
        expression[++index] = op;
    }
    
    index++;
    currentNumber = "";
}

function response() {

    if (document.getElementById('input_field').value == "") {
        return;
    }

    if (currentNumber != "") {
        expression[index] = currentNumber;
    }

    var lastValue = expression[expression.length - 1];
    if (lastValue == "." || isOperator(lastValue)) {
        return;
    }

    while (expression.length != 1) {
        var i = expression.length - 1;

        var firstOperand = parseFloat(expression[i]);
        var operator = expression[i - 1];
        var secondOperand = parseFloat(expression[i - 2]);

        var result = calculate(firstOperand, secondOperand, operator);
        var slicedArray = expression.slice(0, expression.length - 3);;
        expression = slicedArray;
        expression[i - 2] = result;
    }

    document.getElementById('input_field').value = expression[0];
}

function calculate(firstOperand, secondOperand, operator) {
    switch (operator) {
        case "+": return firstOperand + secondOperand;
        case "-": if (firstOperand > secondOperand) return firstOperand - secondOperand; else return secondOperand - firstOperand;
        case "*": return firstOperand * secondOperand;
        case "/": return firstOperand / secondOperand;
        case "%": return firstOperand % secondOperand;
    }
}

function isOperator(operator) {
    return operator == "*" || operator == "/" || operator == "-" || operator == "+" || operator == "%";
}