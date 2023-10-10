#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
console.log(chalk.bgBlue("Guess a number between 1 to 10"));
let actualNumber = 9;
let NumTries = 3;
while (NumTries > 0) {
    const answers = await inquirer.prompt([
        {
            name: "YourGuess",
            type: "number",
            message: "Enter a number",
        },
    ]);
    console.log(answers);
    if (answers.YourGuess == actualNumber) {
        console.log(chalk.bgBlue("You guessed the right number"));
        NumTries == 0;
    }
    else {
        console.log(chalk.bgBlue("You guessed the wrong number"));
    }
    if (actualNumber > answers.YourGuess) {
        console.log(chalk.bgBlue("Think Higher"));
    }
    else {
        console.log(chalk.bgBlue("Think Lower"));
    }
    console.log(chalk.bgBlue(`You have ${NumTries - 1} left`));
    NumTries--;
}
