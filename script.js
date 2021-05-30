var i = 0;
var save = [];

function letter(num){
    document.getElementById('text').value += num;
    if(save[i]==null) save[i] = num; else save[i] += num;
}

function optr(op){
    if(save[0]==null && op == '-'){
        document.getElementById('text').value += op;
        save[0]='-';
    }
    else if (save[0]==null || save[0]== '-') return;

    else if(save[i]==null){
        let rep = document.getElementById('text').value
        document.getElementById('text').value = rep.replaceAt(rep.length - 1, op);
        op=checkop(op);
        save[i-1]=op;
    }
    else if (save[i].charAt(save[i].length-1)=='.') return;
    else{
        document.getElementById('text').value += op;
        op=checkop(op);
        save[++i]=op;
        i++;
    }
}

function dot(){
    if (!save[i].includes(".") && save[i] != "") {
        save[i] += ".";
        document.getElementById('text').value += ".";
    }
}

function result(){
    if(save[i]==null || save[i].charAt(save[i].length-1) == '.') return;

    while(i!=0){
        save[i-2]= calculate(save[i]=parseFloat(save[i]) , save[--i] , save[--i]=parseFloat(save[i]))
        save = save.slice(0, save.length - 2);
    }
    document.getElementById('text').value = save[0];
}

function calculate(first,op,second) {
    switch (op) {
        case "+": return second + first;
        case "-": if(first > second) return first - second; else return second - first;
        case "*": return second * first;
        case "/": return second / first;
        case "%": return second % first;
    }
}

function checkop(op){
    if(op=='x') return '*';
    else if(op=='÷') return '/';
    else return op;
}

String.prototype.replaceAt = function(index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }
 
    var chars = this.split('');
    chars[index] = replacement;
    return chars.join('');
}