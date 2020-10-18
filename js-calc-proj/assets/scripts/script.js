const defaultResult = 0
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput(){
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeToLog(opertaionIdentifier, prevResult,
    opertaionNumber, newResult){
        const logEntry = {
            operation : opertaionIdentifier,
            prevResult : prevResult,
            number : opertaionNumber,
            result : newResult
        }
        logEntries.push(logEntry);
        console.log(logEntries);
}

function calculateResult(calculationType) {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === ('ADD')) {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if (calculationType === ('SUBTRACT')) {
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (calculationType === ('MULTIPLY')) {
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else if (calculationType === ('DIVIDE')) {
        currentResult /= enteredNumber;
        mathOperator = '/';
    }
}

function add() {
    calculateResult('ADD');
}

function subtract() {
    calculateResult('SUBTRACT');
}

function multiply() {
    calculateResult('MULTIPLY');
}

function divide() {
    calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);