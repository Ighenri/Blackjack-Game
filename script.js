let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard 
let hasBlackJack = false

// 1. Create a variable called isAlive and assign it to true
let isAlive = true

let message =" "

function startGame() {
    if (sum <= 20  ) {  
    message = "Do you want to draw new card?🙂"
} else if (sum === 21) {
    message ="Wohoo! You've got Blackjack 🥳"
    hasBlackJack = true
} else {
    message ="You're out of the game😭"
    isAlive = false
}

}

