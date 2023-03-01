let coinFlip

do {
    coinFlip = Math.round(Math.random())
    if (coinFlip === 0) {
        console.log('Heads')
    } else {
        break
    }
    
} while (true);
console.log('Tails')