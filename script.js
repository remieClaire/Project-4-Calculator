// display
const screen = document.getElementById('screen');

// buttons 
//number btns
const oneBtn = document.getElementById('1-btn');
const twoBtn = document.getElementById('2-btn');
const threeBtn = document.getElementById('3-btn');
const fourBtn = document.getElementById('4-btn');
const fiveBtn = document.getElementById('5-btn');
const sixBtn = document.getElementById('6-btn');
const sevenBtn = document.getElementById('7-btn');
const eightBtn = document.getElementById('8-btn');
const nineBtn = document.getElementById('9-btn');
const zeroBtn = document.getElementById('0-btn');

//op btns
const clearBtn = document.getElementById('clear-btn');
const divisionOp = document.getElementById('div-btn');
const multiplyOp = document.getElementById('mult-btn');
const subtractOp = document.getElementById('sub-btn');
const addOp = document.getElementById('add-btn');
const equalsOp = document.getElementById('equal-btn');

let num1 = '';
let num2 = '';

let storeNum2 = false;
let inputFin1 = false;
let inputFin2 = false;
let currOp = 'none';

// attach click event to buttons
//num btn functionality
oneBtn.addEventListener('click', ()=>displayAndStoreNumber('1'));
twoBtn.addEventListener('click', ()=>displayAndStoreNumber('2'));
threeBtn.addEventListener('click', ()=>displayAndStoreNumber('3'));
fourBtn.addEventListener('click', ()=>displayAndStoreNumber('4'));
fiveBtn.addEventListener('click', ()=>displayAndStoreNumber('5'));
sixBtn.addEventListener('click', ()=>displayAndStoreNumber('6'));
sevenBtn.addEventListener('click', ()=>displayAndStoreNumber('7'));
eightBtn.addEventListener('click', ()=>displayAndStoreNumber('8'));
nineBtn.addEventListener('click', ()=>displayAndStoreNumber('9'));
zeroBtn.addEventListener('click', ()=>displayAndStoreNumber('0'));

//op btn functionality
clearBtn.addEventListener('click', ()=>clearInput());
divisionOp.addEventListener('click', ()=>divide());
multiplyOp.addEventListener('click', ()=>multiply());
subtractOp.addEventListener('click', ()=>subtract());
addOp.addEventListener('click', ()=>add());

equalsOp.addEventListener('click', ()=>operationsManager());

// store val as a string
// add to string
// when another button is pressed, convert it to int

// displays number when number btn is pressed
function displayAndStoreNumber(num) {
    
    if (!storeNum2 && !inputFin1) {
        num1 += num;
        screen.textContent = num1;
    }
    else if (storeNum2 && !inputFin2) {
        num2 += num;
        screen.textContent = num2;
    }
    
}

// sets current operation when corresponding button is pressed
function divide() {
    currOp = 'divide';
    inputFin1 = true;
    storeNum2 = true;
}
function multiply() {
    currOp = 'multiply';
    inputFin1 = true;
    storeNum2 = true;
}
function subtract() {
    currOp = 'subtraction';
    inputFin1 = true;
    storeNum2 = true;
}
function add() {
    currOp = 'addition';
    inputFin1 = true;
    storeNum2 = true;
}

// calculates results once equals is pressed
function operationsManager() {
  let result = 0;

  storeNum2 = false;
  inputFin2 = true;
  
  if (!storeNum2) {

    switch (currOp) {
      case 'divide':
        // calculate result
        result = parseInt(num1) / parseInt(num2);

        // output result to display
        screen.textContent = result;

        // reset values
        num1 = '0';
        num2 = '0';
        currOp = 'none';
        inputFin1 = false;
        inputFin2 = false;
        break;
      case 'multiply':
        // calculate result
        result = parseInt(num1) * parseInt(num2);

        // output result to display
        screen.textContent = result;

        // reset values
        num1 = '0';
        num2 = '0';
        currOp = 'none';
        inputFin1 = false;
        inputFin2 = false;
        break;
      case 'addition':
        // calculate result
        result = parseInt(num1) + parseInt(num2);

        // output result to display
        screen.textContent = result;

        // reset values
        num1 = '0';
        num2 = '0';
        currOp = 'none';
        inputFin1 = false;
        inputFin2 = false;
        break;
      case 'subtraction':
        // calculate result
        result = parseInt(num1) - parseInt(num2);

        // output result to display
        screen.textContent = result;

        // reset values
        num1 = '0';
        num2 = '0';
        currOp = 'none';
        inputFin1 = false;
        inputFin2 = false;
        break;
      case 'none':
        break;
    }
  }

}

// clears input & resets
function clearInput() {
    num1 = '';
    num2 = '';
    currOp = 'none';
    inputFin1 = false;
    inputFin2 = false;

    screen.textContent = 0;
}
