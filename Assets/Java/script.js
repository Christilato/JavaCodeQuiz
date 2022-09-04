
// import {questions} from "./questions";
var questions = [import {questions} from "./questions"]
var pTags = document.querySelectorAll("p");
var startBtn = document.getElementById("start");
var timerDiv = document.querySelector("timer");
var questionsDiv = document.querySelector ("questions");
var correctAnswer = localStorage.getItem("correct");
var incorrectAnswer = localStorage.getItem("incorrect");

pTags[0].setAttribute("style", "font-size: 20px;"); // add attributes to the words in <p>



startBtn.addEventListener("click", function() {
    var timer = 60;
    var timer = setInterval(function()
    {
    timer--;
    timerDiv.textContent = " ";
    //show final score
     if( timer === 0){
        clearInterval(timer);
        // display the scores
    }
}, 1000);
})



for (var index = 0; index < questionsDiv.length; index++) {
    var response = window.prompt(questions[i].prompt)
    if (response == questions [i].answer){
        score++
        alert ("correct!");
    } else {
        alert ("Wrong!");
    }
}

alert("you got " + score + "/" + questions.length)

// does this go in the scores sheet?
// function showResponse(event){
//     event.preventDefault ();

// }
// submitEl.addEventListener("click", showResponse); // submit button

// clearing the initials line?
// learEl.addEventListener('click', function (event) {
    // event.preventDefault();
    // textAreaEl.value = ''; // making sure the text box is clean
  
    // for (var i = 0; i < elements.length; i++) {
    //   elements[i].textContent = '';
    // }
