

var pTags = document.querySelectorAll("p");
var startBtn = document.getElementById("start");
var timerDiv = document.querySelector(".timer");
var questionsDiv = document.querySelector("#questions");
var endScreen = document.getElementById("end-screen");
var questionTitle = document.getElementById("question-title");
var questionsChoice = document.querySelector('#choices');
var msgDiv = document.querySelector(".msg")
var currentQuestionIndex = 0
var submitButton = document.querySelector("#submit");





pTags[0].setAttribute("style", "font-size: 20px;"); // add attributes to the words in <p>


startBtn.addEventListener("click", function() {
    var timer = 60;
    startQuiz();
    var timerCount = setInterval(function()
    {
    timer--;
        timerDiv.textContent = "Time left: " + timer;
    
     if( timer === 0){
        clearInterval(timer);
        endScreen.removeAttribute("class")
    }
}, 1000);
})

function startQuiz() {
    questionsDiv.removeAttribute("class");
    getQuestion ();
    endGame ();
}
      


function getQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    questionTitle.textContent = currentQuestion.title;
    questionsChoice.innerHTML = "";



    for (let index = 0; index < currentQuestion.choices.length; index++) {
        var choice = currentQuestion.choices[index];
        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("class", "choice-button"); 
        choiceBtn.setAttribute("value", choice)
        choiceBtn.textContent = choice; 
        questionsChoice.appendChild(choiceBtn);  

    }

}
document.querySelector("#questions").addEventListener("click", function(e){
console.log(e.target.value);
var userAnswer = e.target.value

if(currentQuestionIndex === questions.length-1){
    alert("last question")
    endGame();

} else {
questionAnswerSelected (currentQuestionIndex, userAnswer);
currentQuestionIndex++;
getQuestion();
}
}
)

function questionAnswerSelected(currentQuestionIndex,userAnswer)
    {
        var correctAnswer = questions[currentQuestionIndex].answer;
        if(userAnswer === correctAnswer )
        {
            msgDiv.textContent = "Correct!";
            clearInterval(currentQuestionIndex);
            getQuestion();
        } else {
            msgDiv.textContent = "Wrong Answer!"
            timerDiv = timerDiv - 15;
            clearInterval(currentQuestionIndex);
            getQuestion();
        }
    }

    if( timerDiv <= 0 || currentQuestionIndex ===  getQuestion.length)
    {
        //endScreen.apply.removeAttribute("class");

        clearInterval(timerDiv);
    }

function endGame (){
    clearInterval(timerDiv);
    endScreen.style.display = "block";
     
 }


