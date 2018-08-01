var p1Button = document.querySelector("#p1"); //selecting Player One Button
var p2Button = document.getElementById("p2"); //selecting Player Two Button
var resetButton = document.querySelector("#reset")//selecting Reset Button
var p1Score = 0;
var p1Display = document.querySelector("#p1Display"); //selecting Player One Score on H1
var numInput = document.querySelector("input") // input for winningscore
var p2Score = 0;
var p2Display = document.querySelector("#p2Display"); //selecting Player Two Score on H1
var gameOver = false;
var winningScore = 5
var winningScoreDisplay = document.querySelector("p span") // selecting the winningscore efter Playing to:

//Clicking the Player One button is increasing the p1Score and 
//p1Scoredisplay.
//Winner player's score turns green.

p1Button.addEventListener("click", function() {
    if (!gameOver) {

        p1Score++;

        if (p1Score === winningScore) {
            p1Display.classList.add("winner")
            gameOver = true;
        }

        p1Display.textContent = p1Score;

    }
});

//Clicking the Player Two button is increasing the p2Score and 
//p2Scoredisplay.
//Winner player's score turns green.

p2Button.addEventListener("click", function() {
    if (!gameOver) {

        p2Score++;

        if (p2Score === winningScore) {
            p2Display.classList.add("winner")

            gameOver = true;

        }

        p2Display.textContent = p2Score;
    }
});

resetButton.addEventListener("click", function() {
	reset();

});
//reset turns everything to thte beginning of the game.
function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
}

//if somebody changes the winningscore during the game, 
//game is resetting with new winningscore.
numInput.addEventListener("change", function() {
    winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    reset();
});