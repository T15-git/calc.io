var choice;

function num() { // this fumction will print the value on input..

    if (choice == 1) {
        document.getElementById('number2').value += '1';
    }
    else if (choice == 2) {
        document.getElementById('number2').value += '2';
    }
    else if (choice == 3) {
        document.getElementById('number2').value += '3';
    }
    else if (choice == 4) {
        document.getElementById('number2').value += '4';
    }
    else if (choice == 5) {
        document.getElementById('number2').value += '5';
    }
    else if (choice == 6) {
        document.getElementById('number2').value += '6';
    }
    else if (choice == 7) {
        document.getElementById('number2').value += '7';
    }
    else if (choice == 8) {
        document.getElementById('number2').value += '8';
    }
    else if (choice == 9) {
        document.getElementById('number2').value += '9';
    }
    else if (choice == 0) {
        document.getElementById('number2').value += '0';
    }
    else if (choice == '10') {
        document.getElementById('number2').value += '00';
    }
    else if (choice == 'd') {
        document.getElementById('number2').value += '.';
    }
    else if (choice == '+') {
        document.getElementById('number2').value += '+';
    }
    else if (choice == '-') {
        document.getElementById('number2').value += '-';
    }
    else if (choice == '*') {
        document.getElementById('number2').value += 'x';
    }
    else if (choice == '/') {
        document.getElementById('number2').value += '÷';
    }
    else if (choice == '%') {
        document.getElementById('number2').value += '%';
    }
    else if (choice == 'c') {
        document.getElementById('number2').value = '';
    }
    else if (choice == '=') {
        result();
    }
}

function result(){ // calculating function
    
    var i=0;
    var j=0;
    var arr = [];
    var str;

    str = document.getElementById('number2').value;
        
        for(i ; i < str.length ;i++ ){  //this (for) loop is used to assign value in array
                                        //it will assign the value in this order: [value , operator, value,... and so on]
                                        // for exampel: if you enter 50+40.. the array would be [50,'+',40,... so on] 
            if(str[i]==1){
                if(arr[j]==null)
                    arr[j]='1';
                else  
                    arr[j]+='1';
            }
            else if(str[i]==2){
                if(arr[j]==null)
                    arr[j]='2';
                else  
                    arr[j]+='2';
            }
            else if(str[i]==3){
                if(arr[j]==null)
                    arr[j]='3';
                else  
                    arr[j]+='3';
            }
            else if(str[i]==4){
                if(arr[j]==null)
                    arr[j]='4';
                else  
                    arr[j]+='4';
            }
            else if(str[i]==5){
                if(arr[j]==null)
                    arr[j]='5';
                else  
                    arr[j]+='5';
            }
            else if(str[i]==6){
                if(arr[j]==null)
                    arr[j]='6';
                else  
                    arr[j]+='6';
            }
            else if(str[i]==7){
                if(arr[j]==null)
                    arr[j]='7';
                else  
                    arr[j]+='7';
            }
            else if(str[i]==8){
                if(arr[j]==null)
                    arr[j]='8';
                else  
                    arr[j]+='8';
            }
            else if(str[i]==9){
                if(arr[j]==null)
                    arr[j]='9';
                else  
                    arr[j]+='9';
            }
            else if(str[i]==0){
                if(arr[j]==null)
                    arr[j]='0';
                else  
                    arr[j]+='0';
            }
            else if(str[i]=='.'){
                if(arr[j]==null)
                    arr[j]='.';
                else  
                    arr[j]+='.';
            }
            else if(str[i]=='+'){
                j++;
                arr[j]='+';
                j++;
            }
            else if(str[i]=='-'){
                if(arr[0]==null){
                    arr[j]='-';
                }
                else{
                    j++;
                    arr[j]='-';
                    j++;
                }
            }
            else if(str[i]=='x'){
                j++;
                arr[j]='*';
                j++;
            }
            else if(str[i]=='÷'){
                j++;
                arr[j]='/';
                j++;
            }
            else if(str[i]=='%'){
                j++;
                arr[j]='%';
                j++;
            }
        }
    i=j;
    j=0;
        while(i>=j){   //working explanation:-->                //this loop is to solve the assigned array
        if(i==0){                                               //it works like: if we get an operator between two numbers..
            document.getElementById('number2').value = arr[0];  //it will solve it according to that operator and save it in array
            break;                                              //for example: we get [50,'+',40,'+',30]
        }                                                       //it will solve it like this:[50,'+',40,'+',30]
        else if(arr[i]=='+'){                                   //                           [50,'+',70]
            arr[i-1] = parseFloat(arr[i-1]);                    //ans will be saved in 0th array = [120]
            arr[i+1] = parseFloat(arr[i+1]);
            arr[i-1] = arr[i-1] + arr[i+1];   
        }
        else if(arr[i]=='-'){
            arr[i-1] = parseFloat(arr[i-1]);
            arr[i+1] = parseFloat(arr[i+1]);
            arr[i-1] = arr[i-1] - arr[i+1];   
        }
        else if(arr[i]=='*'){
            arr[i-1] = parseFloat(arr[i-1]);
            arr[i+1] = parseFloat(arr[i+1]);
            arr[i-1] = arr[i-1] * arr[i+1];   
        }
        else if(arr[i]=='/'){
            arr[i-1] = parseFloat(arr[i-1]);
            arr[i+1] = parseFloat(arr[i+1]);
            arr[i-1] = arr[i-1] / arr[i+1];   
        }
        else if(arr[i]=='%'){
            arr[i-1] = parseFloat(arr[i-1]);
            arr[i+1] = parseFloat(arr[i+1]);
            arr[i-1] = arr[i-1] % arr[i+1];   
        }
        i--;
    }
}