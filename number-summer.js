const prompt = require('prompt-sync')({sigint: true});

let num = ""
let sum = 0;

num = Number(prompt("Enter some numbers (type 0 when complete): "));

while (num > 0){
    sum+=num;
    num = Number(prompt("> "));
}

console.log("Those numbers sum to " + sum);