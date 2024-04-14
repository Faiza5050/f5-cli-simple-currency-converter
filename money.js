#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    PKR: 1, // Base Currency
    USD: 277.83,
    EURO: 296.29,
    INR: 3.32,
    AUST: 180.01,
    CAN: 201.71,
    RIYAL: 74.08
};
console.log("/*/*/*/ WElcome To CLI Money Converter /*/*/*/");
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Please Select Option From Currency",
        type: "list",
        choices: ["PKR", "USD", "EURO", "INR", "AUST", "CAN", "RIYAL"]
    },
    {
        name: "to",
        message: "Please Select Option to Currency",
        type: "list",
        choices: ["PKR", "USD", "EURO", "INR", "AUST", "CAN", "RIYAL"]
    },
    {
        name: "amount",
        message: "Please Enter Your Amount to Convert",
        type: "number",
    }
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let convertedAmount = user_answer.amount;
let baseAmount = convertedAmount / fromAmount;
convertedAmount = baseAmount * toAmount;
console.log(Math.round(convertedAmount));
console.log("/*/*/*/ Thank You For Using CLI Money Converter. /*/*/*/");
