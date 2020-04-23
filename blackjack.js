//grabbing the hand fields
const dealerHand = document.querySelector('#dealer-hand');
const playerHand = document.querySelector('#player-hand');
//grabbing the buttons
const dealButton = document.querySelector('#deal-button');
const hitButton = document.querySelector('#hit-button');
const standButton = document.querySelector('#stand-button');

//dealing the cards to the both players
dealButton.addEventListener('click', function(e){
    const card1 = document.createElement('img');
    const card2 = document.createElement('img');
    const card3 = document.createElement('img');
    const card4 = document.createElement('img');
    card1.setAttribute('src', './cards/3D.jpg');
    card2.setAttribute('src', './cards/blue_back.jpg');
    card3.setAttribute('src', './cards/8H.jpg');
    card4.setAttribute('src', './cards/JC.jpg');
    dealerHand.append(card1);
    dealerHand.append(card2);
    playerHand.append(card3);
    playerHand.append(card4 );

})

//hitting the player hand
hitButton.addEventListener('click', function(e){
    const card = document.createElement('img');
    card.setAttribute('src', './cards/3D.jpg');
    playerHand.append(card);

})
