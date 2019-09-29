
let numbers = document.getElementsByClassName('num');
let operators = document.getElementsByClassName('operator');
let decimal = document.getElementById('decimal');

let value = document.getElementById('screen');
let equalSign = document.getElementById('equal');
let clean = document.getElementById('clear');
let deleteNumber = document.getElementById('delete');

let displayedValue = 0;
let evalStringArray = [];
let firstValue;
let lastValue;

let addNumber = (clicked) => {
    let text = clicked.target.innerText;
    let ope = value.innerText;

    if(displayedValue == '0' || ope == "+" || ope == "-" || ope == "/" || ope == "x" ){
        displayedValue = "";
    }
    displayedValue += text;
    value.innerText = displayedValue;
}

let operate ;

let performOperation = (clicked) => {
    let operation = clicked.target.innerText;

    switch (operation) {
        case '+':
            firstValue = displayedValue;
            operate = operation + " ";
            displayedValue = operate;
            value.innerText = displayedValue;
            evalStringArray.push(firstValue);
            evalStringArray.push("+");
            break;
        case '-':
            firstValue = displayedValue;
            operate = operation + " ";
            displayedValue = operate;
            value.innerText = displayedValue;
            evalStringArray.push(firstValue);
            evalStringArray.push("-");
            break;
        case 'x':
            firstValue = displayedValue;
            operate = operation + " ";
            displayedValue = operate;
            value.innerText = displayedValue;
            evalStringArray.push(firstValue);
            evalStringArray.push("*");
            break;
        case '/':
            firstValue= displayedValue;
            operate = operation + " ";
            displayedValue = operate;
            value.innerText = displayedValue;
            evalStringArray.push(firstValue);
            evalStringArray.push(" /");
            break;
        case '=':
            lastValue = displayedValue;
            if(lastValue == "" || lastValue == operate || operate == undefined){
                value.innerText = "Error";
                //evalStringArray = [];
                displayedValue = 0;
            }
            else{
                evalStringArray.push(lastValue);
            
                let final = eval(evalStringArray.join(" "));
                displayedValue = final + "";
                
                let finals = firstValue + '\n' + operate + lastValue + '\n' + displayedValue;
                value.innerText = finals;
            }
            evalStringArray = [];
            break;
        default:
            
            break;
    }
}

for (let i =0; i<numbers.length; i++){
    numbers[i].addEventListener('click', addNumber, false);
};

for (let i=0; i<operators.length; i ++){
    operators[i].addEventListener('click', performOperation, false)
}

deleteNumber.onclick = () => {
    let lov = displayedValue.length;
    if(displayedValue == 0){
        displayedValue = 0;
    }
    else{
        displayedValue = displayedValue.slice(0, lov-1);
        if (displayedValue === ''){
            displayedValue = 0;
        }
    }
    value.innerText = displayedValue;
};

clean.onclick = () => {
    displayedValue = 0;
    firstValue = '';
    evalStringArray = [];
    value.innerText = displayedValue;
};

decimal.onclick = () => {
    if(!displayedValue.includes('.')) {
        displayedValue += '.';
        value.innerText = displayedValue;
    }
 };

