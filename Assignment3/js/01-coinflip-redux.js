let coinFlip
let userInput = parseInt(prompt('Enter amount of times to flip the coin'))
for (let i = 0; i < userInput; i++) {
    const randomNum = Math.round(Math.random())

    if (randomNum === 0) {
        console.log('Heads')
    } else {
        console.log('Tails')
    }
    
}