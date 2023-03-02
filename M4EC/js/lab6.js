// GLOBAL VARIABLES
let futureValue
let investment
let rate
let years

// COLLECT THE VALUES FROM THE USER
// 1. HOW MUCH DO YOU WANT TO INVEST?
investment = parseFloat(prompt('Enter your investment amount as xxxx.xx'))
while (isNan(investment)) {
    investment = parseFloat(prompt('You must enter a valid number'))
} 
    
// 2. WHAT RATE ARE YOU TRYING TO GET?
rate = parseFloat(prompt('Enter the rate you\'re trying to get as xx.x')) 
while (isNan(investment) && investment > 6 ) {
    rate = parseFloat(prompt('You must enter a valid number and rate from 0 - 6'))
}  

// 3. FOR HOW MANY YEARS?
years = parseInt(prompt('How many years do you want to invest for?'))
while (isNan(years) && years > 30) {
    years = parseInt(prompt('You must enter a valid number up to 30'))
} 

// CALCULATE FUTURE VALUE
futureValue = investment
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100)
}

// DISPLAY THE RESULTS
console.log(`Investment amount: $${investment.toFixed(2)}`)
console.log(`Interest rate: ${rate.toFixed(2)}%`)
console.log(`Number of years invested: ${years}`)
console.log(`Future Value: $${futureValue.toFixed(2)}`)





