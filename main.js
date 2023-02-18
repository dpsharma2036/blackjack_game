let firstCard = 11;
let secondCard = 6;
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
//let sumEl = document.querySelector("#sum-el");

function startGame(){
    renderGame();
}




function renderGame(){
    cardsEl.textContent = "cards: " 
    for(let i  = 0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }
    
    sumEl.textContent = "Sum: " + sum;
    if(sum<=20){
        message ="Do you want to draw a new card?🙂";
    }else if(sum === 21){
        message ="Hurray! it's a blackjack!😊";
        hasBlackJack = true;
    }else {
        message ="You're No longer in game!😢";
        isAlive = false;
    }
       messageEl.textContent = message;
    }

    function newCard(){
        
        let card = 2;
        
        sum += card;
        cards.push(card);
        console.log(cards);
        renderGame();
        
    }
    

