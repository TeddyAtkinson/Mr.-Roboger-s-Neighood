# Mr. Roboger's Neighborhood

### Authored-by: Teddy Atkinson

## General Info:
This is a webpage to output a sentence from Mr. Roboger. User inputs a number and the output is given in an array filled in with an if statement to replace numbers containing 1,2,3
## Technologies Used:
* HTML
* CSS
* JavaScript

## Instalation:
1. Clone Repository to a place on your machine
2. Open the index.html file to view project

## Known Bugs:
None

## Link to Repository
[Mr. Roboger's Neighborhood](https://github.com/TeddyAtkinson/Language-Survey)

Description: addeventlistener
Test: hide result information on load and submit
Code: window.addEventListener("load", function() {
  console.log("load event")
  document.getElementById("results").setAttribute("class", "hidden");
  const input = document.getElementById("input");
  input.addEventListener("submit", result);
});
Expected Output: results hidden = true

Description: function result(event) {}
Test: loop i defined as a string increasing by 1 every loop until capped at userinput
Code:
function result(event) {
  event.preventDefault();
  document.getElementById("results").setAttribute("class", "hidden");

  let userArray = [];
  const userInput = document.querySelector("input").value;
  //console.log(userInput);
  
  const patternThree = new RegExp("[3]", "g");
  const patternTwo = new RegExp("[2]", "g");
  const patternOne = new RegExp("[1]", "g");
  

  for (let i = 1; i <= userInput; i++) {
    let iString = `${i}`;
    console.log(iString);
  }
}
Expected Output: [1,2,3,4,5]