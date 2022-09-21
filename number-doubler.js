const prompt = require('prompt-sync')({sigint: true});

let num = 0;

num = Number(prompt("Enter some number "));

while(num<=100){
    num = num*2;
    console.log(num);
}

