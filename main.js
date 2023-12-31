//Game Score
var score = { human: 0, computer: 0 };

//Add player score to game
const playerScoreContainer = document.querySelector("#player-score");
let playerScore = document.createElement("p");

playerScore.classList.add("current-player-score");
playerScore.textContent = `Player Score: ${score.human}`;
playerScoreContainer.appendChild(playerScore);

//Add computer score to game
const computerScoreContainer = document.querySelector("#computer-score");
let computerScore = document.createElement("p");
computerScore.classList.add("current-player-score");
computerScore.textContent = `Computer Score: ${score.computer}`;
computerScoreContainer.appendChild(computerScore);

//Gets computer choice randomly will select between "rock", "paper", or "scissors"
function getComputerChoice() {
	let options = ["ranger", "wizard", "warrior"];
	let choice = Math.floor(Math.random() * options.length);
	let computerChoice = options[choice];
	console.log(`Computer choice: ${computerChoice}`);

	//on player click randomly generate an option
	return computerChoice;
}

//Gets player decision
function getPlayerChoice(decision) {
	if (decision.toLowerCase() === "wizard" || decision.toLowerCase() === "ranger" || decision.toLowerCase() === "warrior") {
		console.log(`Player choice: ${decision.toLowerCase()}`);
		return decision.toLowerCase();
	} else {
		alert("Invalid choice, please pick between rock, paper or scissors");
		return null;
	}
}

//if player picks wizard
const wizard = document.getElementById("wizardButton").addEventListener("click", function () {
	const playerChoice = getPlayerChoice("wizard");
	const computerChoice = getComputerChoice();
	const roundResult = singleRoundOfGame(playerChoice, computerChoice);
	console.log(score);
	keepScore(roundResult);
	gameOver();
});

//if player picks ranger
const ranger = document.getElementById("rangerButton").addEventListener("click", function () {
	const playerChoice = getPlayerChoice("ranger");
	const computerChoice = getComputerChoice();
	const roundResult = singleRoundOfGame(playerChoice, computerChoice);
	keepScore(roundResult);
	gameOver();
});

//if player picks ranger
const warrior = document.getElementById("warriorButton").addEventListener("click", function () {
	const playerChoice = getPlayerChoice("warrior");
	const computerChoice = getComputerChoice();
	const roundResult = singleRoundOfGame(playerChoice, computerChoice);
	const roundVerdict = keepScore(roundResult);
	gameOver();
});

//To play a single round of game
function singleRoundOfGame(player, computer) {
	let verdict;
	if (player === computer) {
		verdict = "It's a tie";
		console.log(verdict);
		return verdict;
	} else if ((player === "wizard" && computer === "warrior") || (player === "ranger" && computer === "wizard") || (player === "warrior" && computer === "ranger")) {
		verdict = "You win!";
		console.log(verdict);
		return verdict;
	} else {
		verdict = "You lose this round!";
		console.log(verdict);
		return verdict;
	}
}

// a helper function to keep score
function keepScore(roundResults) {
	if (roundResults === "You win!") {
		score.human += 1;
		//Update the score text
		playerScore.textContent = `Player Score: ${score.human}`;
	} else if (roundResults === "It's a tie") {
		return;
	} else {
		score.computer += 1;
		// Update the score text
		computerScore.textContent = `Computer Score: ${score.computer}`;
	}
}

//Create A game function for the game loop.
function gameOver() {
	if (score.computer >= 5) {
		console.log("Computer WON");
		score.human = 0;
		score.computer = 0;
		playerScore.textContent = `Player Score: ${score.human}`;
		computerScore.textContent = `Computer Score: ${score.human}`;
	} else if (score.human >= 5) {
		console.log("Human WON");
		score.human = 0;
		score.computer = 0;
		playerScore.textContent = `Player Score: ${score.human}`;
		computerScore.textContent = `Computer Score: ${score.human}`;
	}

	return score;
}

console.log("Game is Over");
