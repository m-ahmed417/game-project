"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
  cardArray.sort(function () {
    return 0.5 - Math.random();
  });
  var grid = document.querySelector(".grid");
  var resultDisplay = document.querySelector("#result");
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = []; //create the board

  function createBoard() {
    cardArray.forEach(function (_, i) {
      var card = document.createElement("img");
      card.src = "images/card-resized.png";
      card.dataset.id = i;
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    });
  } //check for matches


  function checkForMatch() {
    var cards = document.querySelectorAll("img");

    var _cardsChosenId = cardsChosenId,
        _cardsChosenId2 = _slicedToArray(_cardsChosenId, 2),
        optionOneId = _cardsChosenId2[0],
        optionTwoId = _cardsChosenId2[1];

    switch (true) {
      case optionOneId === optionTwoId:
        cards[optionOneId].src = "images/card-resized.png";
        cards[optionTwoId].src = "images/card-resized.png";
        alert("You have clicked the same image!");
        break;

      case cardsChosen[0] === cardsChosen[1]:
        alert("You found a match");
        [optionOneId, optionTwoId].forEach(function (id) {
          cards[id].src = "images/white.png";
          cards[id].removeEventListener("click", flipCard);
        });
        cardsWon.push(cardsChosen);
        break;

      default:
        [optionOneId, optionTwoId].forEach(function (id) {
          cards[id].src = "images/card-resized.png";
        });
        break;
    }

    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;

    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations! You have won";
    }
  } //flip your card


  function flipCard() {
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);

    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 400);
    }
  }

  createBoard();
});