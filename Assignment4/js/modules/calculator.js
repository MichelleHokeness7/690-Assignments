// CREATE A GLOBAL VARIABLE TO CALCULATE THE TOTAL
let total = 0

// ADD A PRIVATE FUNCTION CALLED CALCULATE
const calculate = (userNum1, userNum2, userOp) => {
    switch (userOp) {
        case '+':
            return userNum1 + userNum2
            break;
        case '-':
            return userNum1 - userNum2
            break;
        case '*':
            return userNum1 * userNum2
            break;
        case '/':
            return userNum1 / userNum2
            break;
        default:
           return 0
    }

}
// ADD FOUR PUBLIC FUNCTIONS BELOW
//////////////////////////////////
// ADD FUNCTION
const add = (userNum1, userNum2) => {
    total = calculate(userNum1, userNum2, '+')
    return total
}
// SUBTRACT FUNCTION
const subtract = (userNum1, userNum2) => {
    total = calculate(userNum1, userNum2, '-')
    return total
}
// MULTIPLY FUNCTION
const multiply = (userNum1, userNum2) => {
    total = calculate(userNum1, userNum2, '*')
    return total
}
// DIVIDE FUNCTION
const divide = (userNum1, userNum2) => {
    total = calculate(userNum1, userNum2, '/')
    return total
}
// EXPORT THE FOUR PUBLIC FUNCTIONS
export default { add, subtract, multiply, divide };