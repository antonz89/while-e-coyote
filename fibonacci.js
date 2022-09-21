const prompt = require('prompt-sync')({sigint: true});

let x = 0;
let y = 1;
let z = "";
let test = 0;

let ent = prompt("Enter a number: ");
//------------------------------------------------------------
console.log(x);
test++;
//------------------------------------------------------------
while ( test < ent ){
    console.log(y);
    z = x+y;  
    x = z+y;
    y = x+z; 
    test++;
    
    if(test < ent){
        console.log(z);
        test++;
    } 
    
    if(test < ent){
        console.log(x);
        test++;
    } 
    
}












