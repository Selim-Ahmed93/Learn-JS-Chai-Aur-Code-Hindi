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

const countVowels = (str) =>{

  const vowel ="aeiouAEIOU";
  const count = str.split("").filter(char => vowel.includes(char)).length;
  
  console.log(count);
  return count;
  
}
countVowels("apnacollege")
