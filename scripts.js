function computerPlay() { 
	result = Math.floor(Math.random()*3)
	if (result === 0) {
		return "rock"
	}
	else if (result === 1) {
		return "paper"
	}
	else {
		return "scissors"
	}
}

function playRPS(event) {
	p1 = event.target.id.toLowerCase();
	p2 = computerPlay().toLowerCase();
	var result; 
	var order = ["rock", "paper", "scissors"]
	var p1_index = order.indexOf(p1);
	var p2_index = order.indexOf(p2);

	if (p1 === p2) { // Tie
		result = 0
		console.log("Tie!")
	}
	else if (p2_index === (p1_index+1)%3) { // Loss
		result = -1
		cScore++;
		console.log("Defeat!");
	}

	else { // Win
		result = 1
		pScore++;
		console.log("Victory!");
	}
	pScoreDiv = document.querySelector("#pScore");
	cScoreDiv = document.querySelector("#cScore");

	pScoreDiv.textContent = "Player: " + `${pScore}`;
	cScoreDiv.textContent = "Computer: " + `${cScore}`;

}

var pScore = 0;
var cScore = 0;
buttons = Array.from(document.querySelectorAll(".btn"));
buttons.forEach(button => button.addEventListener('click', playRPS));






















