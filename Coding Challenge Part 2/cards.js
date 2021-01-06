// Initial variables
let suits = ["♣", "♠", "♡", "♢"];
let randomCard;
let randomCard2;
let deck = shuffleDeckOfCards(createDeck());
let shuffledDeck = shuffleDeckOfCards(deck);
let history = [];
let currentIndex;

//First function for letter cards
function specialCard(num) {
  if (num == 1) {
    return "A";
  } else if (num == 11) {
    return "J";
  } else if (num == 12) {
    return "Q";
  } else if (num == 13) {
    return "K";
  } else {
    return num;
  }
}

//Second Function for letter cards
function reverseSpecialCard(letter) {
  if (letter == "A") {
    return "1";
  } else if (letter == "J") {
    return "11";
  } else if (letter == "Q") {
    return "12";
  } else if (letter == "K") {
    return "13";
  } else {
    return letter;
  }
}

function createDeck() {
  let deck = [];
  for (const suit of suits) {
    for (let start = 1; start <= 13; start++) {
      deck.push(suit + specialCard(start));
    }
  }
  return deck;
}
// let deck = createDeck(suits);
/* console.log(`Original Deck: ${deck}`) */

// Shuffle deck

// Get random value within range
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// 1st main function
function shuffleDeckOfCards(arrayInput) {
  // Deep copy
  let deck = arrayInput.slice();

  var currentIndex = deck.length - 1;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    let randomIndex = getRandomInt(currentIndex);

    // And swap it with the current element.
    let temporaryValue = deck[currentIndex];
    deck[currentIndex] = deck[randomIndex];
    deck[randomIndex] = temporaryValue;

    currentIndex--;
  }

  return deck;
}

// Sort shuffled cards by suit
function sortDeckBySuit(arrayInput) {
  let deck = [];
  for (const suit of suits) {
    for (const card of arrayInput) {
      if (card[0] == suit) {
        deck.push(card);
      }
    }
  }
  return deck;
}

//  Deal a card

// Convert card value to words
function cardNumberToWords(num) {
  if (num == "A") {
    return "Ace";
  } else if (num == "2") {
    return "Two";
  } else if (num == "3") {
    return "Three";
  } else if (num == "4") {
    return "Four";
  } else if (num == "5") {
    return "Five";
  } else if (num == "6") {
    return "Six";
  } else if (num == "7") {
    return "Seven";
  } else if (num == "8") {
    return "Eight";
  } else if (num == "9") {
    return "Nine";
  } else if (num == "10") {
    return "Ten";
  } else if (num == "J") {
    return "Jack";
  } else if (num == "Q") {
    return "Queen";
  } else if (num == "K") {
    return "King";
  }
}

// Convertion from symbol to words
function cardSymbolToWords(symb) {
  if (symb == "♠") {
    return "Spades";
  } else if (symb == "♡") {
    return "Hearts";
  } else if (symb == "♢") {
    return "Diamonds";
  } else if (symb == "♣") {
    return "Clubs";
  } else {
    return symb;
  }
}

function cardWordstoNumbers(word) {
  if (word == "Ace") {
    return "A";
  } else if (word == "Two") {
    return "2";
  } else if (word == "Three") {
    return "3";
  } else if (word == "Four") {
    return "4";
  } else if (word == "Five") {
    return "5";
  } else if (word == "Six") {
    return "6";
  } else if (word == "Seven") {
    return "7";
  } else if (word == "Eight") {
    return "8";
  } else if (word == "Nine") {
    return "9";
  } else if (word == "Ten") {
    return "10";
  } else if (word == "Jack") {
    return "J";
  } else if (word == "Queen") {
    return "Q";
  } else if (word == "King") {
    return "K";
  } else {
    return word;
  }
}

function cardWordstoSymbol(word) {
  if (word == "Spades") {
    return "♠";
  } else if (word == "Hearts") {
    return "♡";
  } else if (word == "Diamonds") {
    return "♢";
  } else if (word == "Clubs") {
    return "♣";
  } else {
    return word;
  }
}

function cardWordstoStandard(word) {
  // Ace
  if (word == "Ace of Clubs") {
    return "♣A";
  } else if (word == "Ace of Hearts") {
    return "♡A";
  } else if (word == "Ace of Diamonds") {
    return "♢A";
  } else if (word == "Ace of Spades") {
    return "♠A";
    //Two
  } else if (word == "Two of Clubs") {
    return "♣2";
  } else if (word == "Two of Hearts") {
    return "♡2";
  } else if (word == "Two of Diamonds") {
    return "♢2";
  } else if (word == "Two of Spades") {
    return "♠2";
    //Three
  } else if (word == "Three of Hearts") {
    return "♡3";
  } else if (word == "Three of Diamonds") {
    return "♢3";
  } else if (word == "Three of Spades") {
    return "♠3";
  } else if (word == "Three of Clubs") {
    return "♣3";
    //Four
  } else if (word == "Four of Hearts") {
    return "♡4";
  } else if (word == "Four of Diamonds") {
    return "♢4";
  } else if (word == "Four of Spades") {
    return "♠4";
  } else if (word == "Four of Clubs") {
    return "♣4";
    //Five
  } else if (word == "Five of Hearts") {
    return "♡5";
  } else if (word == "Five of Diamonds") {
    return "♢5";
  } else if (word == "Five of Spades") {
    return "♠5";
  } else if (word == "Five of Clubs") {
    return "♣5";
    //Six
  } else if (word == "Six of Hearts") {
    return "♡6";
  } else if (word == "Six of Diamonds") {
    return "♢6";
  } else if (word == "Six of Spades") {
    return "♠6";
  } else if (word == "Six of Clubs") {
    return "♣6";
    //Seven
  } else if (word == "Seven of Hearts") {
    return "♡7";
  } else if (word == "Seven of Diamonds") {
    return "♢7";
  } else if (word == "Seven of Spades") {
    return "♠7";
  } else if (word == "Seven of Clubs") {
    return "♣7";
    //Eight
  } else if (word == "Eight of Hearts") {
    return "♡8";
  } else if (word == "Eight of Diamonds") {
    return "♢8";
  } else if (word == "Eight of Spades") {
    return "♠8";
  } else if (word == "Eight of Clubs") {
    return "♣8";
    //Nine
  } else if (word == "Nine of Hearts") {
    return "♡9";
  } else if (word == "Nine of Diamonds") {
    return "♢9";
  } else if (word == "Nine of Spades") {
    return "♠9";
  } else if (word == "Nine of Clubs") {
    return "♣9";
    //Ten
  } else if (word == "Ten of Hearts") {
    return "♡10";
  } else if (word == "Ten of Diamonds") {
    return "♢10";
  } else if (word == "Ten of Spades") {
    return "♠10";
  } else if (word == "Ten of Clubs") {
    return "♣10";
    //Jack
  } else if (word == "Jack of Hearts") {
    return "♡J";
  } else if (word == "Jack of Diamonds") {
    return "♢J";
  } else if (word == "Jack of Spades") {
    return "♠J";
  } else if (word == "Jack of Clubs") {
    return "♣J";
    //Queen
  } else if (word == "Queen of Hearts") {
    return "♡Q";
  } else if (word == "Queen of Diamonds") {
    return "♢Q";
  } else if (word == "Queen of Spades") {
    return "♠Q";
  } else if (word == "Queen of Clubs") {
    return "♣Q";
    //King
  } else if (word == "King of Hearts") {
    return "♡K";
  } else if (word == "King of Diamonds") {
    return "♢K";
  } else if (word == "King of Spades") {
    return "♠K";
  } else if (word == "King of Clubs") {
    return "♣K";
  }
}

// 4th main function
function dealCard(arrayInput) {
  let randomIndex = getRandomInt(arrayInput.length);
  let randomCard = arrayInput[randomIndex];

  let [suit, ...card_value] = randomCard;
  /* console.log(randomCard) */
  suit = cardSymbolToWords(suit[0]);

  if (card_value.length == 2) {
    card_value = [card_value[0] + card_value[1]];
  }
  card_value = cardNumberToWords(card_value[0]);
  let randomCardString = card_value + " of " + suit;

  //update deck
  arrayInput.splice(randomIndex, 1);

  return randomCardString;
}

function dealGivenCard(givenCard) {
  let [suit, ...card_value] = givenCard;
  /* console.log(givenCard) */
  suit = cardSymbolToWords(suit[0]);

  if (card_value.length == 2) {
    card_value = [card_value[0] + card_value[1]];
  }
  card_value = cardNumberToWords(card_value[0]);
  let givenCardString = card_value + " of " + suit + " " + givenCard;

  return { givenCardString, givenCard };
}

function disableButtons(value = true) {
  document.getElementById("prevBtn").disabled = value;
  document.getElementById("nxtBtn").disabled = value;
  // document.getElementById("deal").disabled = false;
}

function drawCard() {
  randomCard = dealCard(deck);
  randomCard2 = cardWordstoStandard(randomCard);
  currentIndex = history.length - 1;
  if (history.length > 1) {
    document.getElementById("prevBtn").disabled = false;
  }

  document.getElementById("nxtBtn").disabled = true;
  if (deck.length > 0) {
    document.getElementById(
      "p2"
    ).innerHTML = `Card Dealt: ${randomCard} , ${randomCard2}`;
    document.getElementById("p3").innerHTML = `Cards remaining: ${deck.length}`;
    document.getElementById("p4").innerHTML = `${deck}`;
    drawHistory();
  } else {
    alert("You need to reshuffle.");
    deck = shuffleDeckOfCards(history);
    history = [];
    currentIndex = null;
    document.getElementById(
      "p2"
    ).innerHTML = `Card Dealt: ${randomCard} , ${randomCard2}`;
    document.getElementById("p3").innerHTML = `Cards remaining: ${deck.length}`;
    document.getElementById("p4").innerHTML = `${deck}`;
    document.getElementById("p5").innerHTML = history;
  }
}

function prev() {
  currentIndex--;
  let givenCard = history[currentIndex];

  const { givenCardString } = dealGivenCard(givenCard);

  // re-initialize
  document.getElementById("p2").innerHTML = `Previous: ${givenCardString}`;

  //Disable prev
  if (currentIndex <= 0) {
    document.getElementById("prevBtn").disabled = true;
  }

  // enable next
  document.getElementById("nxtBtn").disabled = false;
}

function next() {
  currentIndex++;
  let givenCard = history[currentIndex];

  const { givenCardString } = dealGivenCard(givenCard);

  // re-initialize
  document.getElementById("p2").innerHTML = `Next: ${givenCardString}`;

  //Disable next
  if (currentIndex >= history.length - 1) {
    document.getElementById("nxtBtn").disabled = true;
    document.getElementById("p2").innerHTML = `Card Dealt: ${givenCardString}`;
  }

  // enable prev
  document.getElementById("prevBtn").disabled = false;
}

function drawHistory() {
  history.push(randomCard2);
  document.getElementById("p5").innerHTML = history;
}

function reShuffle() {
  deck = shuffleDeckOfCards(deck.concat(history));
  history = [];

  shuffledDeck.length = 52;
  document.getElementById("p2").innerHTML = `Card Here:`;
  document.getElementById("p3").innerHTML = `Cards remaining: ${deck.length}`;
  document.getElementById("p4").innerHTML = deck;
  document.getElementById("p5").innerHTML = history;
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
// document
disableButtons();
document.getElementById("p2").innerHTML = `Card Here:`;
document.getElementById(
  "p3"
).innerHTML = `Cards remaining: ${shuffledDeck.length}`;
document.getElementById("p4").innerHTML = `${shuffledDeck}`;
document.getElementById("p5").innerHTML = history;
