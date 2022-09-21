const prompt = require('prompt-sync')({sigint: true});

console.log("Enter a string:")
let str = prompt("> ");
let x =""


while(x.length<10){
    x = x+str
    console.log(x);
}




