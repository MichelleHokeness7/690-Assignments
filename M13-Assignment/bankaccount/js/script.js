// GET BUTTON ELEMENTS AND FROM THE DOM
const buttons = document.querySelectorAll('button');
const caption = document.getElementById('caption');

buttons.forEach( (button, i) => {
    
    button.addEventListener('click', (e) => {
        let userName = prompt('Enter your name');
        console.log(e.target.id);
        console.log(i);
        console.log(userName);
        let userDeposit = prompt('Enter amount to be deposited');
        console.log(e.target.id);
        console.log(i);
        console.log(userName);
        let userWithdrawal = prompt('Enter amount to be drawn out');
        console.log(e.target.id);
        console.log(i);
        console.log(userName);

    })
    
    // userName = userName.button[1]
    //     userName = prompt('Enter amount to be deposited')
    //     console.log(userName)
    // const deposit = function () {
    //     userName = prompt('Enter amount to be deposited');
    //     console.log(userName);

    // }

    // const userName = function() {
    //     buttons[0] = prompt('Enter your name')
    //     console.log(buttons[0])
        
    // }
})