const score = 500;
const balance =new Number(10000);

// console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const oneNumber = 123.2434;

console.log(oneNumber.toPrecision(4));

const thousand = 100000000;

console.log(thousand.toLocaleString('en-BD'));

//***********Math-Method********* */

console.log(Math.round(23.45));

console.log(Math.ceil(23.45));
console.log(Math.floor(34.30));
console.log((Math.random()*10)+1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min+1))+min)


