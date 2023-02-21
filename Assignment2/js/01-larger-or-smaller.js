let smallNum = parseInt(prompt('Enter a number between 1 and 10'));
let largeNum = parseInt(prompt('Enter another number between 1 and 10'));

if (smallNum < largeNum) {
    document.write(`${largeNum} is the larger number you entered.`)
} else if (smallNum == largeNum) {
    document.write('The 2 numbers you entered were the same.')
}