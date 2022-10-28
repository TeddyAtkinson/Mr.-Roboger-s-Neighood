window.addEventListener("load", function() {
  console.log("load event")
  document.getElementById("results").setAttribute("class", "hidden");
  const input = document.getElementById("input");
  input.addEventListener("submit", result);
});

//------------------------------------------------------------------------------

function result(event) {
  event.preventDefault();
  document.getElementById("results").setAttribute("class", "hidden");

  let userArray = [1,2];
  const userInput = document.querySelector("input").value;
  console.log(userInput);
  
  // const patternThree = new RegExp("[3]", "g");
  // const patternTwo = new RegExp("[2]", "g");
  // const patternOne = new RegExp("[1]", "g");

  // for (let i = 0; i < userInput; i++) {
  //   if (i.match(patternThree) === true) {
  //     userArray.push("Won't you be my neighbor?");
  //   }
  //   else if (i.match(patternTwo) === true) {
  //     userArray.push("Boop!");
  //   }
  //   else if (i.match(patternOne) === true) {
  //     userArray.push("Beep");
  //   }
  //   else {
  //     userArray.push(i);
  //   }
  // }
  console.log(userArray);
  
  document.getElementById("info").innerText = userArray
  document.getElementById("results").removeAttribute("class");
  
}

