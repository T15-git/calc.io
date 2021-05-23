var choice;


function num() {

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
        document.getElementById('number2').value += '+'
    }
    else if (choice == '-') {
        document.getElementById('number2').value += '-'
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
        document.getElementById('number2').value = ''
    }
    else if (choice == '=') {
        document.getElementById('number2').value = eval(document.getElementById('number2').value)
    }


}