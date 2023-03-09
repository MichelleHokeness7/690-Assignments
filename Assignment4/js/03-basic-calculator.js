// IMPORT THE MODULE
import calc from './modules/calculator.js';

// COLLECT FIRST NUMBER FROM USER
let userNum1 = parseInt(prompt('Enter a number'))

// COLLECT SECOND NUMBER FROM USER
let userNum2 = parseInt(prompt('Enter another number'))

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
let userOp = prompt('Enter \'+\',\'-\', \'*\', \'/\' to calculate the numbers')
// CHECK TO SEE WHAT OPERATION THEY'RE USING
switch (userOp) {
    case '+':
        console.log(calc.add(userNum1, userNum2))
        break;
    case '-':
        console.log(calc.subtract(userNum1, userNum2))
        break;
    case '*':
        console.log(calc.multiply(userNum1, userNum2))
        break;
    case '/':
        console.log(calc.divide(userNum1, userNum2))
        break;
    default:
        alert('You must enter \'+\', \'-\', \'*\', \'/\'')
       
}

