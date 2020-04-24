//grabbing the hand fields
const dealerField = document.querySelector('#dealer-hand');
const playerField = document.querySelector('#player-hand');
//grabbing the buttons
const dealButton = document.querySelector('#deal-button');
const hitButton = document.querySelector('#hit-button');
const standButton = document.querySelector('#stand-button');

//dealing the cards to the both players
dealButton.addEventListener('click', function(e){
    const card1 = getRandomCard();
    const card2 = getRandomCard();
    const card3 = getRandomCard();
    const card4 = getRandomCard();
    dealerField.append(card1);
    dealerField.append(card2);
    playerField.append(card3);
    playerField.append(card4);

})

//hitting the player hand
hitButton.addEventListener('click', function(e){
    const card = getRandomCard();

    playerField.append(card);

})

//creating the deck of cards

const suits = ['H', 'C', 'D', 'S'];
const faces = ['A', '2','3','4','5','6','7','8','9','10','J','Q','K'];

function createDeck (){
    let deck = []
    for (suit of suits){
        for (face of faces){
            let card = {suit, face}
            deck.push(card)
        }

    }
return deck
    }


/// deal the cards
let deck = createDeck()
let dealerHand = []
let playerHand = []


function getRandomCard() {
    let cardToRemove =  deck[Math.floor(Math.random() * Math.floor(deck.length))];
    deck = deck.filter(function(card){
        return card != cardToRemove
    })
const cardImage = document.createElement('img') 
cardImage.setAttribute('src', `./cards/${cardToRemove.face}${cardToRemove.suit}.jpg`)
return cardImage
}


