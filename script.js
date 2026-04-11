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

let num1 = 0;
let num2 = 0;

let storeNum2 = false;
let currOp = 'none';

// attach click event to buttons
//num btn functionality
oneBtn.addEventListener('click', ()=>displayAndStoreNumber(1));
twoBtn.addEventListener('click', ()=>displayAndStoreNumber(2));
threeBtn.addEventListener('click', ()=>displayAndStoreNumber(3));
fourBtn.addEventListener('click', ()=>displayAndStoreNumber(4));
fiveBtn.addEventListener('click', ()=>displayAndStoreNumber(5));
sixBtn.addEventListener('click', ()=>displayAndStoreNumber(6));
sevenBtn.addEventListener('click', ()=>displayAndStoreNumber(7));
eightBtn.addEventListener('click', ()=>displayAndStoreNumber(8));
nineBtn.addEventListener('click', ()=>displayAndStoreNumber(9));
zeroBtn.addEventListener('click', ()=>displayAndStoreNumber(0));

//op btn functionality
clearBtn.addEventListener('click', ()=>clearInput());
divisionOp.addEventListener('click', ()=>divide());
multiplyOp.addEventListener('click', ()=>multiply());
subtractOp.addEventListener('click', ()=>subtract());
addOp.addEventListener('click', ()=>add());

equalsOp.addEventListener('click', ()=>operationsManager());

function displayAndStoreNumber(num) {
    
    if (!storeNum2) {
        num1 = num;
        storeNum2 = true;
    }
    else {
        num2 = num;
        storeNum2 = false;
    }
    console.log("num1: " + num1);
    console.log("num2: " + num2);
    screen.textContent = num;
}

// sets current operation when corresponding button is pressed
function divide() {
    currOp = 'divide';
}
function multiply() {
    currOp = 'multiply';
}
function subtract() {
    currOp = 'subtraction';
}
function add() {
    currOp = 'addition';
}

// calculates results once equals is pressed
function operationsManager() {
  let result = 0;

  if (!storeNum2) {

    switch (currOp) {
      case 'divide':
        // calculate result
        result = num1 / num2;

        // output result to display
        screen.textContent = result;

        // reset values
        num1 = 0;
        num2 = 0;
        currOp = 'none';
        break;
      case 'multiply':
        result = num1 * num2;
        screen.textContent = result;
        console.log("result: " + result);

        num1 = 0;
        num2 = 0;
        currOp = 'none';
        break;
      case 'addition':
        result = num1 + num2;
        screen.textContent = result;

        num1 = 0;
        num2 = 0;
        currOp = 'none';
        break;
      case 'subtraction':
        result = num1 - num2;
        screen.textContent = result;

        num1 = 0;
        num2 = 0;
        currOp = 'none';
        break;
      case 'none':
        break;
    }
  }

}

function clearInput() {
    num1 = 0;
    num2 = 0;
    currOp = 'none';

    screen.textContent = 0;
}
