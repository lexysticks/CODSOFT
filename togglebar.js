'use strict';
// Selected Elements
const calculatorHeader = document.querySelector('.calculator--head');
const toggleBar = document.querySelector('.toggle--bar > div');
const bodyEl = document.querySelector('body');
const toggleBarContainer = document.querySelector('.toggle--bar');
const displayScreen = document.querySelector('.display--result');
const keypadBackground = document.querySelector('.text--input--container');
const keyPad = document.querySelectorAll('.text--input--container > div > div');
const deleteBtn = document.querySelector('.delete');
const resetBtn = document.querySelector('.reset');
const equalToBtn = document.querySelector('.equal--to');

const toggleMode = function () {
  if (toggleBar.classList.contains('active--1')) {
    // Switch To Toggle Bar 2
    toggleBar.classList.remove('active--1');
    toggleBar.classList.add('active--2');

    // Toggle Bar Active Mode 2
    toggleBarContainer.classList.add('toggle--theme--2');

    // Display Screen Active Mode 2
    displayScreen.classList.add('display--result--theme--2');

    // Keypad Background Active Mode 2
    keypadBackground.classList.add('text--input--container--theme--2');
    keyPad.forEach((keys) => {
      keys.classList.add('keypad--theme--2');
    });

    // Delete, Reset and Equal To Button Active Mode 2
    deleteBtn.classList.add('delete--theme--2');
    resetBtn.classList.add('reset--theme--2');
    equalToBtn.classList.add('equalto--theme--2');

    // Body Active Mode 2
    bodyEl.classList.add('theme--2');
    calculatorHeader.classList.add('calculator--head--theme--2');
  } else if (toggleBar.classList.contains('active--2')) {
    // Switch To Toggle Bar 3
    toggleBar.classList.remove('active--2');
    toggleBar.classList.add('active--3');

    // Toggle Bar Active Mode 3
    toggleBarContainer.classList.remove('toggle--theme--2');
    toggleBarContainer.classList.add('toggle--theme--3');

    // Display Screen Active Mode 3
    displayScreen.classList.remove('display--result--theme--2');
    displayScreen.classList.add('display--result--theme--3');

    // Keypad Background Active Mode 3
    keypadBackground.classList.remove('text--input--container--theme--2');
    keyPad.forEach((keys2) => {
      keys2.classList.remove('keypad--theme--2');
    });
    keypadBackground.classList.add('text--input--container--theme--3');
    keyPad.forEach((keys) => {
      keys.classList.add('keypad--theme--3');
    });

    // Delete Reset and Equal To Button Active Mode 3
    deleteBtn.classList.remove('delete--theme--2');
    resetBtn.classList.remove('reset--theme--2');
    equalToBtn.classList.remove('equalto--theme--2');
    deleteBtn.classList.add('delete--theme--3');
    resetBtn.classList.add('reset--theme--3');
    equalToBtn.classList.add('equalto--theme--3');

    // Body Active Mode 3
    bodyEl.classList.remove('theme--2');
    bodyEl.classList.add('theme--3');
    calculatorHeader.classList.remove('calculator--head--theme--2');
    calculatorHeader.classList.add('calculator--head--theme--3');
  } else if (toggleBar.classList.contains('active--3')) {
    // Switch To Toggle Bar 1
    toggleBar.classList.remove('active--3');
    toggleBar.classList.add('active--1');

    // Display Screen Active Mode 1
    displayScreen.classList.remove('display--result--theme--3');

    // Toggle Bar Active Mode 1
    toggleBarContainer.classList.remove('toggle--theme--3');

    // Delete Reset and Equal To Button Active Mode 3
    deleteBtn.classList.remove('delete--theme--3');
    resetBtn.classList.remove('reset--theme--3');
    equalToBtn.classList.remove('equalto--theme--3');

    // Keypad Background Active Mode 1
    keypadBackground.classList.remove('text--input--container--theme--3');
    keyPad.forEach((keys) => {
      keys.classList.remove('keypad--theme--3');
    });

    // Body Active Mode 1
    bodyEl.classList.remove('theme--3');
    calculatorHeader.classList.remove('calculator--head--theme--3');
  }
};

toggleBar.addEventListener('click', toggleMode);
