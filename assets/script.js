const startButton= document.getElementById("start-button");
const choicesEl = document.getElementById("choices");
function startQuiz(){
getQuestions();

}
function getQuestions(){
	console.log(questions[0].questionTitle);
	let currentQuestion = questions[0];
	let questionTitle = document.getElementById("question-title");
	questionTitle.textContent= questions[0].questionTitle;
	//console.log(questions[0].options);
	for (let i=0; i<questions[0].options.length; i++){
		console.log(questions[0].options[i]);
	
	}
}

startButton.onclick= startQuiz;
