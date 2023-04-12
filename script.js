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

  const grid = document.querySelector(".grid");
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement("img");
      card.setAttribute("src", "images/card-resized.png");
      card.setAttribute("data-id", i);
      grid.appendChild(card);
    }
  }

  createBoard();
});
//find matches
function checkForMatch() {
  const cards = document.querySelectorAll("img");
  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];

  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute("src", "images/white.png");
    cards[optionTwoId].setAttribute("src", "images/white.png");
    alert("You have a match");
  }
}

//flip the card
function flipCard() {
  let cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenId.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 600);
  }
}

createBoard();
