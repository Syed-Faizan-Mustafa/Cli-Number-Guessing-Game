#! /usr/bin/env node
import inquirer from "inquirer";
// we have to create our projects in small small chunks.
// 1) we make computer to generate random number. 
// 2) take user input for guessing number.
// 3) compare the number of random number of computer and user input.
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userguessednumber",
        type: "number",
        message: "Please guess a number between 1 to 6",
    },
]);
if (answer.userguessednumber === randomNumber) {
    console.log("congatulation! you guessed right number");
}
else {
    console.log("You Guessed Wrong Number");
}
