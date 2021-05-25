var choice,operator;
var result=0;

function num() {
    var num2=0;

    if (choice == 1) {
        document.getElementById('number2').value += '1'
    }
    else if (choice == 2) {
        document.getElementById('number2').value += '2'
    }
    else if (choice == 3) {
        document.getElementById('number2').value += '3'
    }
    else if (choice == 4) {
        document.getElementById('number2').value += '4'
    }
    else if (choice == 5) {
        document.getElementById('number2').value += '5'
    }
    else if (choice == 6) {
        document.getElementById('number2').value += '6'
    }
    else if (choice == 7) {
        document.getElementById('number2').value += '7'
    }
    else if (choice == 8) {
        document.getElementById('number2').value += '8'
    }
    else if (choice == 9) {
        document.getElementById('number2').value += '9'
    }
    else if (choice == 0) {
        document.getElementById('number2').value += '0'
    }
    else if (choice == '10') {
        document.getElementById('number2').value += '00'
    }
    else if (choice == '+') {
        if(result!=0){
            num2 = document.getElementById('number2').value
            num2 = parseInt(num2);
            document.getElementById('number1').value = result + num2 + '+'
            document.getElementById('number2').value = ''
            operator = '+'
            result += num2
        }else{
            result = document.getElementById('number2').value
            result = parseInt(result);
            document.getElementById('number1').value += result + '+'
            document.getElementById('number2').value = ''
            operator = '+'
        }
    }
    else if (choice == '-') {
        if(result!=0){
            num2 = document.getElementById('number2').value
            num2 = parseInt(num2);
            document.getElementById('number1').value = result - num2 + '-'
            document.getElementById('number2').value = ''
            operator = '-'
            result -= num2
        }else{
            result = document.getElementById('number2').value
            result = parseInt(result);
            document.getElementById('number1').value += result + '-'
            document.getElementById('number2').value = ''
            operator = '-'
        }
    }
    else if (choice == '*') {
        document.getElementById('number2').value += '*'
    }
    else if (choice == '/') {
        document.getElementById('number2').value += '/'
    }
    else if (choice == '%') {
        document.getElementById('number2').value += '%'
    }
    else if (choice == 'c') {
        
        document.getElementById('number1').value = ''
        document.getElementById('number2').value = ''
    }
    else if (choice == '=') {
        num2 = document.getElementById('number2').value
        num2 = parseInt(num2);
        document.getElementById('number1').value = ''

        switch (operator){

            case '+':document.getElementById('number2').value = result + num2
            result=0
            break

            case '-':document.getElementById('number2').value = result - num2
            result=0
            break

            case '*':document.getElementById('number2').value = result * num2
            result=0
            break

            case '/':document.getElementById('number2').value = result / num2
            result=0
            break

            case '%':document.getElementById('number2').value = result % num2
            result=0
            break

            default:document.getElementById('number2').value = 'Error'
            result=0
            break
        }
    }


}