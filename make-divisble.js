const prompt = require('prompt-sync')({sigint: true});

console.log("Enter x:")
let x = Number(prompt("> "));
console.log("Enter y:")
let y = Number(prompt("> "));


while(x%y!==0){
    x++;
}

console.log(x +" is divisible by " + y);