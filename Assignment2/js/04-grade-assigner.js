let userNum = parseInt(prompt('Please enter a number between 1 and 100.'))

if (userNum >= 1 && userNum < 60) {
    console.log('You received an F')
} else if (userNum >= 60 && userNum <= 69) {
    console.log('You received a D')
} else if (userNum >= 70 && userNum <= 79) {
    console.log('You received a C')
} else if (userNum >= 80 && userNum <= 89) {
    console.log('You received a B')
} else if (userNum >= 90 && userNum <= 100) {
        console.log('You received an A')
} else {
    console.log('You did not enter a valid number between 1 and 100.')
}