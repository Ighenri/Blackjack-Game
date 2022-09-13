let firstCard = 10;
let secondCard = 11;
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;

let message =" ";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl =document.getElementById("cards-el");

function startGame(){
    renderGame()
} 

function renderGame() {
    if (sum <= 20  ) {  
    message = "Do you want to draw new card?";
} else if (sum === 21) {
    message ="You've got Blackjack";
    hasBlackJack = true;
} else {
    message ="You're out of the game";
    isAlive = false;
}

messageEl.textContent = message;
sumEl.textContent = "sum: " + sum;
cardsEl.textContent = "cards: " + cards[0] + " " + cards[1] 

}

function newCard() {
    console.log("drawing a card")
    let card = 6;
    sum += card;
    renderGame();
}
