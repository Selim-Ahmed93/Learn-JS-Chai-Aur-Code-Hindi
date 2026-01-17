// (function chai(){
//     console.log('DB CONNECTED');
// })();

// // Arrow Function With IIFE//

// (() =>{
//     console.log('DB Connect Two');
    
// })();

// ((name) =>{
//     console.log(`DB CONNECT THREE ${name}`);
    
// })('hitesh');

// ((name) => console.log (`DB CONNECT FIVE ${name}`))('hitesh')


// let val1 = 5;
// let val2 = 10;

// function twoValue (num1,num2){
//     let result = num1 * num2;
//     return result
// }

// const total = twoValue(val1, val2);
// const total2 = twoValue(10, 10);

// console.log(total);
// console.log(total2);


// *********JAVASCRIPT EXECUTION CONTEXT******//



var A = 20;
var B = 30;

function addValue(){
    let myName = "md selim";
    console.log(myName);
    console.log('Hello Javascript');
    console.log(A);
    console.log(B);
    if(true){
         return  `its right value`
     }
     
    }
addValue()