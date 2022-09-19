const startButton= document.getElementById("startQuiz");
const choicesEl = document.getElementById("choices");
function startQuiz(){
getQuestions();

}
var currentQuestionIndex = 0;
function getQuestions(){
	console.log(questions[currentQuestionIndex].questionTitle);
	let currentQuestion = questions[currentQuestionIndex];
	let questionTitle = document.getElementById("question-title");
	questionTitle.textContent= questions[currentQuestionIndex].questionTitle;
	choicesEl.textContent=""
	//console.log(questions[currentQuestionIndex].options);
	for (let i=0; i<questions[currentQuestionIndex].options.length; i++){
		//console.log(questions[currentQuestionIndex].options[i]);

		//answers option button 
		let btn= document.createElement("button");
		btn.setAttribute("value", questions[currentQuestionIndex].options[i]);
		btn.textContent = questions[currentQuestionIndex].options[i];
		btn.onclick = questionClick;
		choicesEl.appendChild(btn);
	}
}

function questionClick (){
	//console.log(this.value);
	//console.log(questions[currentQuestionIndex].answer);
	//console.log(this.value==questions[currentQuestionIndex].answer);
	if (this.value==questions[currentQuestionIndex].answer) {
		console.log("correct");
	}
	else{
		console.log("wrong");
	}
	currentQuestionIndex++;
	getQuestions();
}


startButton.onclick= startQuiz;

//display question function
function displayQuestions() {

}

//answer function

//end game function

//event listern//

