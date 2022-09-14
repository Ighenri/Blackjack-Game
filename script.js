let player = {
    name: "per",
    chips: 200,
    
}

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message =" ";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl =document.getElementById("cards-el");

console.log (cards)
function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1 ;
    if(randomNumber > 10) {
        return 10; // this changes any other value greater than 10 and returns it to 10.
    }
    else if ( randomNumber === 1){
        return 11;  // This is the value of he Ace card of the blackjack
    }
    else{
        return randomNumber;
    }
}


function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
} 

function renderGame() {
    cardsEl.textContent = "cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    
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


}

function newCard() {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards)
    renderGame();
}


