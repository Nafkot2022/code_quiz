let highScoreEl = document.getElementById("high-score");
function printHighScore(){
	var highscores =
	JSON.parse(window.localStorage.getItem("highscores")) || [];

	highscores.forEach(function(score) {
    // create li tag for each high score
    var liTag = document.createElement("li");
    liTag.textContent = score.timeLeft + " - " + score.userName;
    // display on page
    //var olEl = document.getElementById("highscores");
    highScoreEl.appendChild(liTag);
  });
}
printHighScore();

