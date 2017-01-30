console.log("JS file is connected to HTML! Woo!")

/*created game logic*/
//var cardOne = "queen";
//var cardTwo = "queen";
//var cardThree = "king";
//var cardFour = "king";

/*
if (cardTwo===cardFour){
		window.alert("Sorry, try again.")
} else if (cardTwo===cardThree){
		window.alert("Sorry, try again.")
} else if (cardTwo===cardOne){
		window.alert("You found a match!")
} else if (cardThree===cardFour){
		window.alert("You found a match!")
} else {
		window.alert("Sorry, try agian.")
}
*/


//cards in the game
var cards=['queen', 'queen', 'king', 'king'];

//card in play
var cardsInPlay =[];

// finds board
var board = document.getElementById('game-board');

function createBoard() {
	for (var i=0; i<4; i++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);
		board.appendChild(cardElement);
	}
}



//checks to see cards in play
function isTwoCards (){
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='images/king.png' alt='King of Spades'>";
	} else {
		this.innerHTML = "<img src='images/queen.png' alt='Queen of Hearts'>";
	}
	if (cardsInPlay.length === 2){
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}


function isMatch(cards) {
	//alert message
	if (cards[0] === cards[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

createBoard();

