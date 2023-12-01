function Rock() {
  const playerChoice = "Rock";
  choices = ["Rock", "Paper", "Scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  if (playerChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
    console.log("You Win!");
  } else console.log("You Lose!");
  console.log(computerChoice);
}

// function displayResult(playerChoice, computerChoice, result) {
//   const resultElement = document.getElementById("result");
//   resultElement.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. Result: ${result}`;
// }
