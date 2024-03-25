#! /usr/bin/env node
import inquirer from "inquirer";
// 1: coputer will generate random number - done
// 2: user input for guessing number
// 3: compare user input with computer generated number and show the result
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber);
const number = await inquirer.prompt([
    {
        name: "guessnumber",
        type: "number",
        message: "HELLO, GUESS A RIGHT NUMBER: ",
    },
]);
if (number.guessnumber === randomNumber) {
    console.log("HURRAH CONGRATULATIONS! YOU GUESS A RIGHT NUMBER");
}
else {
    console.log("ASHHH SORRY! YOU GUESS A WRONG NUMBER");
};
