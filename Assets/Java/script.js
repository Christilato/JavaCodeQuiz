
var startBtn = document.getElementById("start");
var counterDiv = document.getElementById("counter");

startBtn.addEventListener("click", function() {

    var counter = 60;
    var timer = setInterval(function()
    {
    counter--;
    counterDiv.textContent = counter;
    if( counter === 0){
        clearInterval(timer);
    }
    if(isIncorrect()){
        alert ("Wrong");
        // add decrease by 10 seconds to the timer 
    } else {
        alert ("Correct!");
    }
    }, 1000);
})



// import questions from "./questions";

function isIncorrect(){

}