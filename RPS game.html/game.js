const player_played = document.getElementById("player_played");
const computer_played = document.getElementById("computer_played");
const player_result = document.querySelector(".score_player");
const computer_result = document.querySelector(".score_computer");
const whoWon = document.querySelector(".winner");

let result = "";
function Rock() {
  const playerChoice = "Rock";
  //   const image1 = document.querySelector(".img1");
  //   const image2 = document.querySelector(".img2");
  //   const image3 = document.querySelector(".img3");
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
  //   image1.style.display = "block";

  whoWon.textContent = result;
  return result;
}
function Paper() {
  const playerChoice = "Paper";
  //   const image1 = document.querySelector(".img1");
  //   const image2 = document.querySelector(".img2");
  //   const image3 = document.querySelector(".img3");
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
  //   image1.style.display = "block";

  whoWon.textContent = result;
  return result;
}
function Scissors() {
  const playerChoice = "Scissors";
  //   const image1 = document.querySelector(".img1");
  //   const image2 = document.querySelector(".img2");
  //   const image3 = document.querySelector(".img3");
  const choices = ["Rock", "Paper", "Scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else if (playerChoice === "Scissors" && computerChoice === "Rock") {
    result = "You Lose!";
  } else result = "You Won!";
  player_played.textContent = `You chose ${"Scissors"}`;
  computer_played.textContent = `Computer chose ${computerChoice}`;
  result === "You Won!" ? player_result.textContent++ : player_result;
  result === "You Lose!" ? computer_result.textContent++ : computer_result;
  //   image1.style.display = "block";
  whoWon.textContent = result;
  return result;
}
