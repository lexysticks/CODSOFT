'use strict';

const keys = document.querySelector('.text--input--container');

const calculator = {
  displayValue: '0',
  operator: null,
  firstOperand: null,
  wiatingForSecondOperand: false,
};

function updateDisplay() {
  const displayResult = document.querySelector('.display--result--text');

  displayResult.innerHTML = calculator.displayValue;
}

updateDisplay();

keys.addEventListener('click', function (e) {
  const y = e.target;
  
  if (y.classList.contains('text--input--container')) {
    return;
  }

  if (y.classList.contains('operator')) {
    handleOperator(y.textContent);
    updateDisplay();
    return;
  }

  if (y.classList.contains('btn--point')) {
    inputDecimal(y.textContent);
    updateDisplay();
    return;
  }

  if (y.classList.contains('reset')) {
    resetCalculator();
    updateDisplay();
    return;
  }

  if (y.classList.contains('delete')) {
    deleteNo();
    updateDisplay();
    return;
  }

  if (Number.isInteger(parseFloat(y.textContent))) {
    inputDigit(y.textContent);
  }
  updateDisplay();
});

function inputDigit(digit) {
  const { displayValue, wiatingForSecondOperand } = calculator;

  if (wiatingForSecondOperand === true) {
    calculator.displayValue = digit;
    calculator.wiatingForSecondOperand = false;
  } else {
    calculator.displayValue =
      displayValue === '0' ? digit : displayValue + digit;
  }

  console.log(calculator);
}

function inputDecimal(dot) {
  if (calculator.wiatingForSecondOperand === true) {
    calculator.displayValue = '0.';
    calculator.wiatingForSecondOperand = false;
    return;
  }

  if (!calculator.displayValue.includes(dot)) {
    calculator.displayValue += dot;
  }
  console.log(calculator);
}

function handleOperator(nextOperator) {
  const { firstOperand, displayValue, operator } = calculator;
  const inputValue = parseFloat(displayValue);

  if (operator && calculator.wiatingForSecondOperand) {
    calculator.operator = nextOperator;
    console.log(calculator);
    return;
  }

  if (firstOperand === null && !isNaN(inputValue)) {
    calculator.firstOperand = inputValue;
  } else if (operator) {
    const result = calculate(firstOperand, inputValue, operator);
    calculator.displayValue = String(result);
    calculator.firstOperand = result;
  }

  calculator.wiatingForSecondOperand = true;
  calculator.operator = nextOperator;
  console.log(operator);
}

function calculate(firstOperand, secondOperand, operator) {
  if (operator === '+') {
    return firstOperand + secondOperand;
  } else if (operator === '-') {
    return firstOperand - secondOperand;
  } else if (operator === 'X') {
    return firstOperand * secondOperand;
  } else if (operator === '/') {
    return firstOperand / secondOperand;
  }

  return secondOperand;
}

function resetCalculator() {
  calculator.displayValue = '0';
  calculator.firstOperand = null;
  calculator.wiatingForSecondOperand = false;
  calculator.operator = null;
  console.log(calculator);
}

function deleteNo() {
  const sli1 = calculator.displayValue.length - 1;
  if (calculator.displayValue.length === 1) {
    calculator.displayValue = '0';
    calculator.firstOperand = parseFloat(calculator.displayValue);
  } else {
    calculator.displayValue = calculator.displayValue.slice(0, sli1);
    calculator.firstOperand = parseFloat(calculator.displayValue);
  }
  console.log(calculator);
}
