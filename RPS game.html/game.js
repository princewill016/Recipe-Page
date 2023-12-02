const player_played = document.getElementById("player_played");
const computer_played = document.getElementById("computer_played");
const player_result = document.querySelector(".score_player");
const computer_result = document.querySelector(".score_computer");
const whoWon = document.querySelector(".winner");
const tableBody = document.querySelector("#myTable tbody");

function addFourTableColumns() {
  const initialCellContent = {};
  const tableBody = document.querySelector("#myTable tbody");
  const newRow = document.createElement("tr");
  for (let i = 0; i < 4; i++) {
    const newCell = document.createElement("td");
    newCell.textContent = `Cell ${i + 1}`;
    switch (i) {
      case 0:
        newCell.classList.add("no_of_cells", "column_1_cells");
        break;
      case 1:
        newCell.classList.add("player_cell");
        break;
      case 2:
        newCell.classList.add("computer_cell");
        break;
      case 3:
        newCell.classList.add("winner_cell");
        break;
      default:
        break;
    }
    newRow.appendChild(newCell);
  }
  tableBody.appendChild(newRow);
  const column1Cell = document.querySelector(".column_1_cells");
  const playerCell = document.querySelector(".player_cell");
  const computerCell = document.querySelector(".computer_cell");
  const winnerCell = document.querySelector(".winner_cell");

  if (column1Cell) {
    column1Cell.textContent = initialCellContent.column1Cell = "Number";
  }
  if (playerCell) {
    playerCell.textContent = " player content";
    playerCell.textContent = initialCellContent.yourChoice = "your  choice";
  }
  if (computerCell) {
    computerCell.textContent = " computer content";
  }
  if (winnerCell) {
    winnerCell.textContent = "winnerCell";
  }
}

function Rock() {
  const playerChoice = "Rock";
  const choices = ["Rock", "Paper", "Scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
    result = "You Won!";
  } else result = "You Lose!";
  player_played.textContent = `You chose ${"Rock"}`;
  computer_played.textContent = `Computer chose ${computerChoice}`;
  result === "You Won!" ? player_result.textContent++ : player_result;
  result === "You Lose!" ? computer_result.textContent++ : computer_result;
  whoWon.textContent = result;
  addFourTableColumns();
  return result;
}

function Paper() {
  const playerChoice = "Paper";
  const choices = ["Rock", "Paper", "Scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else if (playerChoice === "Paper" && computerChoice === "Scissors") {
    result = "You Lose!";
  } else result = "You Won!";
  player_played.textContent = `You chose ${"Paper"}`;
  computer_played.textContent = `Computer chose ${computerChoice}`;
  result === "You Won!" ? player_result.textContent++ : player_result;
  result === "You Lose!" ? computer_result.textContent++ : computer_result;
  whoWon.textContent = result;
  addFourTableColumns();
  return result;
}

function Scissors() {
  const playerChoice = "Scissors";
  const choices = ["Rock", "Paper", "Scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else if (playerChoice === "Scissors" && computerChoice === "Rock") {
    result = "You Lose!";
  } else result = "You Won!";
  player_played.textContent = `You chose Scissors`;
  computer_played.textContent = `Computer chose ${computerChoice}`;
  result === "You Won!" ? player_result.textContent++ : player_result;
  result === "You Lose!" ? computer_result.textContent++ : computer_result;
  whoWon.textContent = result;
  addFourTableColumns();
  return result, playerChoice;
}
