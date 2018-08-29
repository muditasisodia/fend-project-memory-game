const symbols = ["fa fa-diamond", "fa fa-diamond", "fa fa-paper-plane-o", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-anchor", "fa fa-bolt", "fa fa-bolt", "fa fa-cube", "fa fa-cube", "fa fa-leaf", "fa fa-leaf", "fa fa-bicycle", "fa fa-bicycle", "fa fa-bomb", "fa fa-bomb"];
var matched = [];
var open = [];
var moves;
const ratingContainer = document.querySelector(".stars");

 function init(){
   //Clearing deck
   document.querySelector('.deck').innerHTML = "";

   //Hiding modal
    $('#myModal').modal("hide");

   /*
    * Create a list that holds all of your cards
    */

   matched = [];
   open = [];
   moves = 0;

   //After reset, moves should be reset to 0
   moveDisplay.innerHTML = moves;

   //After reset, starts should be set to 3
   starFlag =3;
   ratingContainer.innerHTML = `<li><i class="fa fa-star"></i></li>
   <li><i class="fa fa-star"></i></li>
   <li><i class="fa fa-star"></i></li>`;

   /*
    * Display the cards on the page
    *   - shuffle the list of cards using the provided "shuffle" method below
    *   - loop through each card and create its HTML
    *   - add each card's HTML to the page
    */
    const shuffled = shuffle(symbols);

    //displaying card grid
    const myDocFrag = document.createDocumentFragment();
    for(let i = 0; i<shuffled.length; i++) {
      var card = document.createElement("li");
      card.className = "card";
      var symbol = document.createElement("i");
      symbol.className = shuffled[i];
      card.appendChild(symbol);
      myDocFrag.appendChild(card);

      card.addEventListener("click", function() {
        this.classList.add("show", "open");
        addToOpen(this);
      });
    }

    var deck = document.querySelector(".deck");
    deck.appendChild(myDocFrag);

 }

 //Adding card to list of open cards
 function addToOpen(cardToOpen){
   open.push(cardToOpen);
   //created a class disabled to ensure that opened cards cannot be reopened and matched to themselves
   cardToOpen.classList.add("disabled");
   if(open.length === 2){
     addMoves();
     //accessing class of i element within card
     var newSymbol = open[1].children[0].classList[1];
     var oldSymbol = open[0].children[0].classList[1];

     if(newSymbol === oldSymbol){
       matched.push(newSymbol, oldSymbol);
       matchCard(open[0]);
       matchCard(cardToOpen);
       open = [];
       isgameOver();
     }
     else{
       setTimeout(()=>{
         closeCard(open[0]);
         closeCard(cardToOpen);
         open = [];
       }, 500);

     }
   }
 }

 function matchCard(element){
   element.classList.add("match");
 }

 function closeCard(element) {
   element.classList.remove("show", "open", "disabled");
 }

 function isgameOver(){
   if(symbols.length === matched.length){
     //alert("game over");

     $('#myModal').modal("show");
   }
 }

moveDisplay = document.querySelector(".moves");
 function addMoves(){
   moves++;
   moveDisplay.innerHTML = moves;
   rating();
 }

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

const restart = document.querySelector(".restart");
restart.addEventListener("click", function(){
  init();
});

function rating() {
  switch(moves)
  {
    case 10: ratingContainer.innerHTML = `<li><i class="fa fa-star"></i></li>
    <li><i class="fa fa-star"></i></li>`;
    break;
    case 15: ratingContainer.innerHTML = `<li><i class="fa fa-star"></i></li>`;
    break;
  }
}

init();

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
