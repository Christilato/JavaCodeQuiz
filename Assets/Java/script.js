

var pTags = document.querySelectorAll("p");
var startBtn = document.getElementById("start");
var timerDiv = document.querySelector(".timer");
var questionsDiv = document.querySelector("#questions");
var endScreen = document.getElementById("end-screen");
var questionTitle = document.getElementById("question-title");
var questionsChoice = document.querySelector('#choices');

pTags[0].setAttribute("style", "font-size: 20px;"); // add attributes to the words in <p>

console.log(questions); // questions are attached 


startBtn.addEventListener("click", function() {
    var timer = 60;
    startQuiz();
    var timerDecrease = setInterval(function()
    {
    timer--;
        timerDiv.textContent = "Time left: " + timer;
    
     if( timer === 0){
        clearInterval(timer);
        endScreen.removeAttribute("class")
        // display the scores?
    }
}, 1000);
})

function startQuiz() {
    questionsDiv.removeAttribute("class");
    // We need to make deconstructed for loop
    // WE create an index variable 
    // And we manually go through each questions
    //Then once the correct answer is given, then we increase our index variable manually
    //And then pass it into the next aset of questions
    var i = 0
    questionTitle.textContent = questions[i].title;
    for (let j = 0; j < 4; j++) {
        var button = document.createElement('button')
        button.textContent = questions[i].choices[j]
        questionsChoice.append(button)      
    }

        
    answerCorrect.addEventListener ("click", function() {
        var answerCorrect = questions[i].answer
        if(answerCorrect === button) {
            alert("Correct!");
    }     else {
            alert("Wrong!")
    }
}) 
}
   

 /* We are going to have a condition tocheck if the user clicks the right answer
 If correct, increase index variable by 1
 THen re create all the title and choices wiht that new index
 Else - time from timer
 */



function endScreen (){
    endScreen.apply.removeAttribute("class");
    var enterInitials = document.createElement("input");
    var submitButton = document.createElement("button");

 }
