
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

let addNumber = (clicked) => {
    let text = clicked.target.innerText;
    let ope = value.innerText;

    if(displayedValue === 0 || ope == "+" || ope == "-" || ope == "/" || ope == "x"){
        displayedValue = "";
    }

    displayedValue += text;
    value.innerText = displayedValue;
}

let performOperation = (clicked) => {
    let operation = clicked.target.innerText;

    switch (operation) {
        case '+':
            firstValue = displayedValue;
            displayedValue = operation + " ";
            value.innerText = displayedValue;
            evalStringArray.push(firstValue);
            evalStringArray.push("+");
            break;
        case '-':
            firstValue = displayedValue;
            displayedValue = operation + "";
            value.innerText = displayedValue;
            evalStringArray.push(firstValue);
            evalStringArray.push("-");
            break;
        case 'x':
            firstValue = displayedValue;
            displayedValue = operation + "";
            value.innerText = displayedValue;
            evalStringArray.push(firstValue);
            evalStringArray.push("*");
            break;
        case '/':
            firstValue= displayedValue;
            displayedValue = operation + "";
            value.innerText = displayedValue;
            evalStringArray.push(firstValue);
            evalStringArray.push(" /");
            break;
        case '=':
            evalStringArray.push(displayedValue);
            let final = eval(evalStringArray.join(" "));
            let finalDisplay = final + "";
            evalStringArray = [];

            let upperValue = firstValue + '\n' + '+' + displayedValue+ '\n';
            displayedValue =  upperValue + '=' + finalDisplay;

            

            value.innerText = displayedValue;
            displayedValue = final + "";
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
    displayedValue = displayedValue.slice(0, lov-1);
    if (displayedValue === ''){
        displayedValue = 0;
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

