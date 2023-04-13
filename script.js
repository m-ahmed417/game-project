document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    {
      name: "arsenal",
      img: "images/arsenal-resized.png",
    },
    {
      name: "arsenal",
      img: "images/arsenal-resized.png",
    },
    {
      name: "chelsea",
      img: "images/chelsea-resized.png",
    },
    {
      name: "chelsea",
      img: "images/chelsea-resized.png",
    },
    {
      name: "city",
      img: "images/city-resized.png",
    },
    {
      name: "city",
      img: "images/city-resized.png",
    },
    {
      name: "liverpool",
      img: "images/liver-resized.png",
    },
    {
      name: "liverpool",
      img: "images/liver-resized.png",
    },
    {
      name: "spurs",
      img: "images/spurs-resized.png",
    },
    {
      name: "spurs",
      img: "images/spurs-resized.png",
    },
    {
      name: "united",
      img: "images/united-resized.png",
    },
    {
      name: "united",
      img: "images/united-resized.png",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  //create the board
  function createBoard() {
    cardArray.forEach((_, i) => {
      const card = document.createElement("img");
      card.src = "images/card-resized.png";
      card.dataset.id = i;
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    });
  }

  //checks for matches
  function checkForMatch() {
    const cards = document.querySelectorAll("img");
    const [optionOneId, optionTwoId] = cardsChosenId;

    switch (true) {
      case optionOneId === optionTwoId:
        cards[optionOneId].src = "images/card-resized.png";
        cards[optionTwoId].src = "images/card-resized.png";
        alert("You have a match!");
        break;

      case cardsChosen[0] === cardsChosen[1]:
        alert("You found a match");
        [optionOneId, optionTwoId].forEach((id) => {
          cards[id].src = "images/white.png";
          cards[id].removeEventListener("click", flipCard);
        });
        cardsWon.push(cardsChosen);
        break;

      default:
        [optionOneId, optionTwoId].forEach((id) => {
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
  }
  //flip the card
  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 400);
    }
  }

  createBoard();
});
