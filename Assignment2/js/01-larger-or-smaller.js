let firstNum = parseInt(prompt('Enter a number'));
let secondNum = parseInt(prompt('Enter another number'));

if (firstNum < secondNum) {
    document.write(`${secondNum} is the larger number you entered.`)
} else if (firstNum === secondNum) {
    document.write('The 2 numbers you entered were the same.')
} else if (secondNum < firstNum) {
    document.write(`${firstNum} is the larger number you entered.`)
}