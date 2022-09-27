const startButton= document.getElementById("startQuizBtn");
const choicesEl = document.getElementById("choices");
const mainPageEl =document.getElementById("mainPage");
let correctWrongEl = document.getElementById("correctWrong");
let textCorrect = document.createTextNode("correct");
let textWrong = document.createTextNode("wrong");
var timerArea = document.querySelector(".rightHeader")
let timerEl =document.getElementById("countDown");
let scoreContainerEl = document.getElementById("score-container");
const saveScore = document.getElementById("save-btn");
const userName = document.getElementById("user-name");

let timeLeft = 60;
let timeInterval;
let currentQuestionIndex = 0;

//start quiz function
function startQuiz(){
	choicesEl.setAttribute("hidden", true);
	timeInterval = setInterval(countdown,1000);
	//scoreContainerEl.setAttribute("hidden", true);
getQuestions();

}
//questions fuction
function getQuestions(){
	
	mainPageEl.setAttribute("hidden", true);
	
	let currentQuestion = questions[currentQuestionIndex];
	let questionTitle = document.getElementById("currentQuestion");
	questionTitle.textContent= questions[currentQuestionIndex].questionTitle;
	choicesEl.textContent=""
	//console.log(questions[currentQuestionIndex].options);
	for (let i=0; i<questions[currentQuestionIndex].options.length; i++){

		//answers option button 
		let btn= document.createElement("button");
		btn.setAttribute("value", questions[currentQuestionIndex].options[i]);
		btn.textContent = questions[currentQuestionIndex].options[i];
		btn.onclick = questionClick;
		choicesEl.appendChild(btn);
	}
}

function questionClick (){
	correctWrongEl.textContent= ""
	if (this.value==questions[currentQuestionIndex].answer) {
		correctWrongEl.appendChild(textCorrect);
	}
	else{
		correctWrongEl.appendChild(textWrong);
		timeLeft = timeLeft -10;
	}
	currentQuestionIndex++;
	
	if (currentQuestionIndex ==questions.length){
		//console.log("you are finished")
		timerEl.textContent = timeLeft;
		endGame();
	}
	else{
		getQuestions();
	}
}
const currentDiv = document.getElementById("incorrectAnswer");

//countdown timer, begins at 180 seconds
function countdown() {
	timeLeft--;
	timerEl.textContent = timeLeft + "seconds";
	if(timeLeft <= 0){
		//clearInterval(timeInterval);
		endGame();
	}

}
//high score
saveScore.onclick = saveHighScore;
//save highscore
function saveHighScore(){
	var highscores =
	JSON.parse(window.localStorage.getItem("highscores")) || [];
let score= {
	timeLeft:timeLeft,
	userName:userName.value,
}
console.log(JSON.stringify(score));
highscores.push(score);
window.localStorage.setItem("highscores", JSON.stringify(highscores));
window.location.replace("/highscore.html");
}
	
//end game function
function endGame(){
	clearInterval(timeInterval);
	//let scoreEl =document.querySelector("#score");
	//scoreEl.textContent = ("Your Score: " + "score");
	scoreContainerEl.removeAttribute("class");
	let questionContainerEl =document.getElementById("questionContainer");
	questionContainerEl.setAttribute("class", "hide");
	
}

startButton.onclick = startQuiz;

