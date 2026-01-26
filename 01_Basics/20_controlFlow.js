// Arith Matic Operator..

// +,-,*,/ increment decrement exponentiaon, modulus//

// let a = 20;
// let b = 30;
// b++
// a--

// console.log(b%a);


// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);

// Comparison Operator//

// <,>,=<,>=, ==, !=,===

// const score = 50;

// if(score >= 100){
//     console.log('score is 200');
    
// } else{
//     console.log(`score is ${score}`);
    
// }
// let temperature = 45

// if (temperature >= 50){
//     console.log("dhaka temperature 55");
    
// } else{
//     console.log("Dhaka temperature 45");
    
// }


// const balance = 1000;

// if(balance <500){
//      console.log('less then 500');
     
// } else if (balance <= 600){
//   console.log('balance 1000');
  
// }

// else{
//     console.log('less then 1200');
    
// }

// const userLoggedIn = true;
// const debitCard = false;
// const loggedInFromGoogle = true;
// const loggedInFromGmail = true;

// if(userLoggedIn && debitCard){
//     console.log('You Are Allow ');
    
// }
// else{
//     console.log('You Are NoT Allow');
    
// }

// if(loggedInFromGoogle || loggedInFromGmail){
//    console.log('You Can LoggedIn');
   
// }

// switch case IN JAVASCRIPT //

// const month = 'Apr';

// switch (month) {
//     case "Jan":
//         console.log('January');
        
//         break;
//         case "feb":
//             console.log('February');
//             break;
//             case "mar":
//                 console.log('March');
//                 break;
//             case "Apr":
//                 console.log('April');
//                  break;
//             case "may":
//               console.log('May');
//               break;
                        
//     default:
//         console.log(' this not a Month ');
        
//         break;
// };

// Truthy Value or false value in Javascript//
// false Value in Js = False, 0n, NaN,Undefined,Null,BigInt,0,-0
// Truthy VALUE IN JAVASCRIPT = "FALSE","[]" "{}" Function (){},


// const userEmail = "0";

// if(userEmail){
//     console.log('Got User Email');
   
// } else{
//     console.log('this not  a Email');
    
// }

// && or || operator in js

// && operator means all values ofcurse True //
// OR Operator means only one values true then execute code or Ignored this code 

// lets start ..

// let value1 = true;
// let value2 = false;

// if(value1 && value2){
//      console.log('Its Right Value');
     
// }

// this code not execute thats mean && this operator check all value are true //

// if(value1 || value2){
//      console.log('execute This value');
     
// }

// this  code yes run OR || operator check one value true then code Run Oky//

// Nullish Coalescing Operator ?? // 

// let val;
//    val = 10 ?? 55;

//    val  = null ?? 10; 
// val = undefined ?? 10;

//    console.log(val);
   
// Ternary Operator in JS //
 // Ternary Operator lets Start  syntax 

 // condition ? true : False ;

//  const unitPrice = 2000;

//  unitPrice >= 3500 ? console.log('You Can Buy It') : console.log('You Can Not Buy It');

//  const coffePrice = 780;
//  coffePrice >= 800 ? console.log('You Are Not Able') : console.log('You Are Able this time');

const car = {
      name:'TOYOTA',
      color:'Black',
      model:2018,
      start: function(){
          console.log('Car Is Start');
          
      },
      stop: function(){
          console.log('Car is Stop');
          
      },
      accelerator: function (){
          console.log('Car is Running');
          
      }

};
car.start()
car.accelerator()

console.log(car.name);


 
