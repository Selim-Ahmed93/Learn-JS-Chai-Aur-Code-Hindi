//lets start Arrow function//

// const addNumber =(num1 , num2) =>{

//     if (num1 === num2) {
//         console.log("Yeas  its right value");

//     }
//     else{
//         console.log("its not equal numbers");

//     }
//        return num1*num2
// };

// console.log(addNumber(122,122))

// const countVowels = (str) => {
//     let count = 0
//   for (let char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     )
//     count++
//   }
  
//   console.log(count)

//   return count;
// };

// countVowels("apnacollege");

// const sumTwoNumber = (...num) => {
//   return num.reduce(
//     (pre, cur) => pre + cur,

//     0
//   );
// };

// console.log(sumTwoNumber(500, 211, 233));

// const subStraction = (...num) =>{
//        return num.reduce((pre,cur)=> pre * cur,1
//     );
// };

// console.log(subStraction(54,46,43))
// const subStraction = (...num) =>{
//     return num.reduce((pre,cur) =>{
//          return pre*cur
//     },1)
// };

// console.log(subStraction(54,46,43))

// const countVowels = (str) =>{

//   const vowel ="aeiouAEIOU";
//   const count = str.split("").filter(char => vowel.includes(char)).length;
  
//   console.log(count);
//   return count;
  
// }
// countVowels("apnacollege")

// const countVowels = (str) =>{
//            vowel = "aeiouAEIOU";
//   const count = str.split("").filter(char => vowel.includes(char)).length
//   console.log(count);
  
//   return count;
// }
// countVowels('mycountrynamebangladesh')

// this callback function

// function abc(){
//   console.log('hello world')
// }

// function newF(abc){
//   console.log('i Love Coding');
  
//  abc();
// }
// console.log((newF(abc)));

// lets start Javascript Methods

// this is for each method

// const fruits =["Apple","mango","Banana","dragon"];

//      fruits.forEach((val,index)=>{
//         console.log(`Fruits index:${index} fruits:${val}`);
        
//      })





// const allFruits = fruits.forEach((_,idx) =>{
// console.log(`Fruits index ${idx}:`);
// // console.log(`All Items :${fullArr}`);

// const Arr =[12,34,55,100];

// const newArr =Arr.filter((value)=>{
//     return value % 2 === 0;
// })
// console.log(newArr);



// Arr.forEach((num)=>{
    
//     console.log(num*2);
// });
// const newArr = Arr.map((num)=>{
//      return num*3;
     
//     });
//     // console.log(newArr);

//     newArr.push(33);

//     console.log(newArr);


    // const marks = [33,40,50,60,70,80,100];

    // const getResult = marks.map(m => {
        
    //     return m*3;
        
    // });
 
    // console.log(getResult);
  
    

    // const result = marks.map((mark) =>{
    //    return mark * 3
    // });

    // console.log(result);


    
    //............ OOP IN JAVASCRIPT...............//

//   this is pure objects in javascript //


    // const players = {
    //     name:'dkfdf',
    //     ages:30,
    //     skill:criket,
    // }
    
    // class player{
    //     constructor(name,age,skill,run){
    //       this.name = name;
    //       this.age = age;
    //       this.skill = skill;
    //       this.run = run;
    //     }
    // }

    // const shakib = new player('Shakib',40,'Bowler',3438);
    // const masrafi = new player('Masrafi',49,'fast Bowler');
    // const tamim = new player('Tamim',54,'Batting');

    // console.log(shakib)
    // console.log( masrafi.age)
    // console.log( tamim.age)


    // function calculateCart (price1,price2,...num){
    //     return num;
    
        
    // }

    // console.log(calculateCart(200,400,300,2200));

 /*

 const user = {
    userName:'md selim ahmed',
    price:999,

}
/*
/*

function handleObjects (anyObjects){
    console.log(`User Name : ${anyObjects.userName} price is: ${anyObjects.price}`);
    
}

 handleObjects({
     userName:"md Ayman Ahmed",
     price:1222,
 })
 /*

const myArr = [220,442,544];

function newArrValue (anyArr){
      return anyArr[1];
}
    console.log(newArrValue(myArr));
    */


    
//  *********Function With Return Value****//

/*
function sum(num1,num2){
    let addNumber = num1 * num2;
  
      return `this is sum value: ${addNumber}`;
    console.log(addNumber);
    
}
const result = sum(10,10)

console.log(result);
*/
"use strict";


/*
function myName(firstName,lastName){
         console.log('hello1');
         console.log('hello2');
         console.log('hello3');
         console.log('hello4');

         if (firstName == 'test') {
            return 'First Name Test';
         }
         console.log('hello5');
         console.log('hello6');

         if(lastName == 'hello'){
             return 'Last Name Test'
         }

         console.log('hello7');
         console.log('hello8');
         
        //  return;
         
           
};

const myResult = myName('last', 'high');

console.log(myResult);

*/

function memberRegistration(memberId,memberAge){
       if(memberId == '12345' && memberAge >= 20){
          return true;
       }
    
        return false;
       
}

// const isValid = memberRegistration('12346', 19);

if( memberRegistration('12346', 19)){
   alert('User Is Valid')
}
else{
    alert('User Is Not  Valid')
}


