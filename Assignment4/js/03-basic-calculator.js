// IMPORT THE MODULE
import { add, subtract, multiply, divide } from './modules/calculator';

// COLLECT FIRST NUMBER FROM USER
let userNum1 = Number(prompt('Enter a number'))
// COLLECT SECOND NUMBER FROM USER
let userNum2 = Number(prompt('Enter another number'))
// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
let userOp = prompt('Enter \'+\',\'-\', \'*\', \'/\' to calculate the numbers')
// CHECK TO SEE WHAT OPERATION THEY'RE USING
switch (userOp) {
    case '+':
        console.log(add())
        break;
    case '-':
        console.log(calc.subtract())
        break;
    case '*':
        console.log(calc.multiply())
        break;
    case '/':
        console.log(calc.divide())
        break;
    default:
        alert('You must enter \'+\', \'-\', \'*\', \'/\'')
        break;
}
// CALL THE APPROPRIATE FUNCTION
