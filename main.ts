#! /use/bin/env node
import inquirer from "inquirer";

console.log("..DUR-E-SHEHWAR'S WORD COUNTER..");
console.log("=".repeat(33));

let answers= await inquirer.prompt(
    [
        {
            name : "sentence",
            type: "input",
            message: "Enter your Sentence:",

        }
    ]
);
const words = answers.sentence.trim().split(" ");

console.log("Sentence words:");
console.log(words);
console.log(`Word are ${words.length}`);



