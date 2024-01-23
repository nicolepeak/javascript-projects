const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
newStr= str.slice(3) + str.slice (0, 3);
console.log(newStr);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`I changed ${str} to ${newStr}.`)
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let userAnswer = input.question("How many letters will be relocated? ");

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (userAnswer < str.length) {
    newStr2 = str.slice(userAnswer) + str.slice(0, userAnswer)
    console.log(newStr2)
} else {
    newStr2= str.slice(3) + str.slice (0, 3);
    console.log("You've entered too many letters to move")
}