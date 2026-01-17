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

const score = 50;

if(score >= 100){
    console.log('score is 200');
    
} else{
    console.log(`score is ${score}`);
    
}
let temperature = 45

if (temperature >= 50){
    console.log("dhaka temperature 55");
    
} else{
    console.log("Dhaka temperature 45");
    
}


const balance = 1000;

if(balance <500){
     console.log('less then 500');
     
} else if (balance <= 600){
  console.log('balance 1000');
  
}

else{
    console.log('less then 1200');
    
}

const userLoggedIn = true;
const debitCard = false;
const loggedInFromGoogle = true;
const loggedInFromGmail = true;

if(userLoggedIn && debitCard){
    console.log('You Are Allow ');
    
}
else{
    console.log('You Are NoT Allow');
    
}

if(loggedInFromGoogle || loggedInFromGmail){
   console.log('You Can LoggedIn');
   
}