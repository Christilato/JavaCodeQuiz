

var pTags = document.querySelectorAll("p");
var startBtn = document.getElementById("start");
var timerDiv = document.querySelector(".timer");
var questionsDiv = document.querySelector("#questions");
var endScreen = document.getElementById("end-screen");
var questionTitle = document.getElementById("question-title");
var questionsChoice = document.querySelector('#choices');
var currentQuestionIndex = 0


pTags[0].setAttribute("style", "font-size: 20px;"); // add attributes to the words in <p>

// console.log(questions); // questions are attached 


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
}
    // We need to make deconstructed for loop
    // WE create an index variable 
    // And we manually go through each questions
    //Then once the correct answer is given, then we increase our index variable manually
    //And then pass it into the next aset of questions
    

// start quiz starts our timer, variable = to set interval, call getQuestion (), 
// inside of get question get the question from the question object- update whatever element     
    


function getQuestion(){

    let currentQuestion = questions[currentQuestionIndex];
    questionTitle.textContent = currentQuestion.title;
    // clear out the question title 
    questionsChoice.innerHTML = "";

    for (let index = 0; index < currentQuestion.choices.length; index++) {
        var choice = currentQuestion.choices[i];
        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("class", "choice-button"); 
        choiceBtn.setAttribute("value", choice-button)
        choiceBtn.textContent =  index+1 + "." + choice 
        questionsChoice.appendChild(choiceBtn)
    }
}
// grab button element and check if even a choice button 
//if the user guesses wrong we time > 0 update timer on the page and if the get it 
//right- move onto the other
// wrong display

//end- screen 
// update time in timer 
// if timer is = 0 it ends and calls the end-screen button



// function for question click and that will grab the value and check it 
    
    

        
//     answerCorrect.addEventListener ("click", function() {
//         var answerCorrect = questions[i].answer
//         if(answerCorrect === button) {
//             alert("Correct!");
//     }     else {
//             alert("Wrong!")
//             // decrease
//     }
// }) 

   

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
