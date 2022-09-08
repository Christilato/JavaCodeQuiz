
// //save the last grade?
// //local storage?\ JSON.string?

var showScores = document.querySelector("show-scores"); 
 
submitButton.addEventListener("click", function(){
    showScores();

})

// // to get answers to show?
function showScores(event){
    JSON.parse(window.localStorage.getItem('show-scores'))

}






// // To get the data onto the sheet?
// var state = element.getAttribute("data-state");

// if(state === "hidden")
// {
//   var dataNumber = element.getAttribute("data-number");
//     console.log(dataNumber); // checking if element show
//   element.dataset.state = "unHidden";
//   element.textContent = dataNumber;
// }


