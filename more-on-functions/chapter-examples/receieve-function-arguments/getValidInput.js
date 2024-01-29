const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

// TODO 1: write a validator 
// that ensures input starts with "a"
doesStartWithA = function (string) {
  if (string[0].toLowerCase() === "a") {
    return true
  }

};


// TODO 2: write a validator 
// that ensures input is a vowel
//doesStartWithVowel = function (string) {
 // if (string[0] == "a" || "e"|| "i" || "o" || "u") {
  //  return true
 // }
//}


// Be sure to test your code!
//console.log(getValidInput('Enter a valid word: ', doesStartWithA));
//console.log (getValidInput('Enter a name: ', doesStartWithVowel));
