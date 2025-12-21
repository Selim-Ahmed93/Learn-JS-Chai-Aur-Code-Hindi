// JavaScript Objects 2 types //
// 1.Singleton objects 
// Object.create() its called Singleton Objects//
// 2.literals objects//

// lets Starts literals Objects..//

const mySym =Symbol("key1");

const jsUser ={name:'selim Ahmed',
              [mySym]: "😍💕",
              "full name":"Akash Khan",
               Ages:31,
               Location:"Dhaka",
               Email:"mdselimahmed6467@gmail.com",
               isLoggedIn:true,
               lastLoginDays:["Sunday","monday"]
}

// console.log(typeof jsUser[mySym]);

// jsUser.Email ="mdakashahmed7675@gmail.com";

// jsUser.Email ="mdakashahmed888@gmail.com";
// Object.freeze(jsUser)

// console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello ayman");
    
}

// jsUser.greeting()

jsUser.greetingTwo = function(){
    console.log(`Hello JS, ${this.name},my Location ${this.Location}`);
    
}
jsUser.greetingTwo()
