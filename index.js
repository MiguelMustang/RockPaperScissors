const versus = document.querySelector("#versus");
const gameResult = document.querySelector("#gameResult");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;

choiceBtns.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    versus.textContent = `${player} vs ${computer}`;
    gameResult.textContent = checkWinner();
  })
);

const computerTurn = () => {
  const randNum = Math.floor(Math.random() * 3) + 1;
  switch (randNum) {
    case 1:
      computer = "👊";
      break;
    case 2:
      computer = "🖐️";
      break;
    case 3:
      computer = "✌️";
      break;
  }
};

const checkWinner = () => {
  if (player == computer) {
    return "Empate";
  } else if (computer == "👊") {
    return player == "🖐️" ? "Has ganado" : "Has perdido";
  } else if (computer == "🖐️") {
    return player == "✌️" ? "Has ganado" : "Has perdido";
  } else if (computer == "✌️") {
    return player == "👊" ? "Has ganado" : "Has perdido";
  }
};
