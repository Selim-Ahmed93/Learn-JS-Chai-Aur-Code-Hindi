let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());

let myCreateDate = new Date(2026,1,18);
console.log(myCreateDate.toDateString());

let localTime =Date.now(); 

console.log(Math.floor(Date.now()/1000));

let goodDay = new Date();
console.log(goodDay);
console.log(goodDay.getMonth());
console.log(goodDay.getFullYear());
console.log(goodDay.getMinutes());
goodDay.toLocaleString("default",{
 weekday:"long",
 
});
console.log(goodDay);




