"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var cardArray = [{
    name: "arsenal",
    img: "images/arsenal-resized.png"
  }, {
    name: "arsenal",
    img: "images/arsenal-resized.png"
  }, {
    name: "chelsea",
    img: "images/chelsea-resized.png"
  }, {
    name: "chelsea",
    img: "images/chelsea-resized.png"
  }, {
    name: "city",
    img: "images/city-resized.png"
  }, {
    name: "city",
    img: "images/city-resized.png"
  }, {
    name: "liverpool",
    img: "images/liver-resized.png"
  }, {
    name: "liverpool",
    img: "images/liver-resized.png"
  }, {
    name: "spurs",
    img: "images/spurs-resized.png"
  }, {
    name: "spurs",
    img: "images/spurs-resized.png"
  }, {
    name: "united",
    img: "images/united-resized.png"
  }, {
    name: "united",
    img: "images/united-resized.png"
  }];
  var grid = document.querySelector(".grid");
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

  function createBoard() {
    for (var i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/card-resized.png");
      card.setAttribute("data-id", i);
      grid.appendChild(card);
    }
  }

  createBoard();
}); //find matches

function checkForMatch() {
  var cards = document.querySelectorAll("img");
  var optionOneId = cardsChosenId[0];
  var optionTwoId = cardsChosenId[1];

  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute("src", "images/white.png");
    cards[optionTwoId].setAttribute("src", "images/white.png");
    alert("You have a match");
  }
} //flip the card


function flipCard() {
  var cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenId.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);

  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 600);
  }
}

createBoard();