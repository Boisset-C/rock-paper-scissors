//Game Score
var score = { human: 0, computer: 0 };

//Gets computer choice randomly will select between "rock", "paper", or "scissors"
function getComputerChoice() {
	let options = ["rock", "paper", "scissors"];
	let computerPick = Math.floor(Math.random() * options.length);

	//on player click randomly generate an option
	return options[computerPick];
}

//Gets player decision
function getPlayerSelection(decision) {
	if (decision.toLowerCase() === "rock" || decision.toLowerCase() === "paper" || decision.toLowerCase() === "scissors") {
		return decision.toLowerCase();
	} else {
		alert("Invalid choice, please pick between rock, paper or scissors");
		return null;
	}
}

//To play a single round of game
function singleRoundOfGame(player, computer) {
	let verdict;
	if (player === computer) {
		verdict = "It's a tie";
		return verdict;
	} else if ((player === "rock" && computer === "scissors") || (player === "scissors" && computer === "paper") || (player === "paper" && computer === "rock")) {
		verdict = "You win!";
		return verdict;
	} else {
		verdict = "You lose this round!";
		return verdict;
	}
}

// a helper function to keep score
function keepScore(roundResults) {
	if (roundResults === "You win!") {
		score.human += 1;
	} else if (roundResults === "It's a tie") {
		return;
	} else {
		score.computer += 1;
	}
}

//Create A game function for the game loop.
function game() {
	while (score.computer < 5 && score.human < 5) {
		//Gets computer decision
		let computerPlayed = getComputerChoice();
		console.log(`computer choice: ${computerPlayed}`);
		//Gets player choice selection between "rock", "paper", or "scissors"
		let playerDecision = prompt("Will it be rock, paper or scissors?");
		console.log(`player input: ${playerDecision}`);
		//Gets player decision
		let playerPlayed = getPlayerSelection(playerDecision);
		console.log(`player choice: ${playerPlayed}`);

		//Round played
		let verdict = singleRoundOfGame(playerPlayed, computerPlayed);
		console.log(`Round Results: ${verdict}`);

		keepScore(verdict);

		console.log(score);
	}
	return score;
}

// game();
console.log("Game is Over");
