//Gets player choice selection between "rock", "paper", or "scissors"
let playerDecision = prompt("Will it be rock, paper or scissors?");

let computerPlayed = getComputerChoice();
let playerPlayed = getPlayerSelection(playerDecision);

//Gets computer choice randomly will select between "rock", "paper", or "scissors"
function getComputerChoice() {
	let options = ["rock", "paper", "scissors"];
	let computerPick = Math.floor(Math.random() * options.length);

	console.log("This should be pick", computerPick);
	console.log(options[computerPick]);
	//on player click randomly generate an option
	return options[computerPick];
}

console.log(`player played: ${playerPlayed}`);
function getPlayerSelection(decision) {
	if (decision.toLowerCase() === "rock" || decision.toLowerCase() === "paper" || decision.toLowerCase() === "scissors") {
		return decision.toLowerCase();
	} else {
		alert("Invalid choice, please pick between rock, paper or scissors");
	}
}

//To play a single round of game
function singleRoundOfGame(player, computer) {
	let verdict;
	while (player === "rock") {
		if (computer === "rock") {
			verdict = "It's a Tie";
			return verdict;
		} else if (computer === "scissors") {
			verdict = "You win!";
			return verdict;
		} else {
			verdict = `You lose! Computer played: ${computerPlayed}`;
			return verdict;
		}
	}

	while (player === "paper") {
		if (computer === "paper") {
			verdict = "It's a Tie";
			return verdict;
		} else if (computer === "rock") {
			verdict = "You win!";
			return verdict;
		} else {
			verdict = `You lose! Computer played: ${computerPlayed}`;
			return verdict;
		}
	}

	while (player === "scissors") {
		if (computer === "scissors") {
			verdict = "It's a Tie";
			return verdict;
		} else if (computer === "paper") {
			verdict = "You win!";
			return verdict;
		} else {
			verdict = `You lose! Computer played: ${computerPlayed}`;
			return verdict;
		}
	}
}

console.log(singleRoundOfGame(playerPlayed, computerPlayed));

//Create A game function for the game loop.
