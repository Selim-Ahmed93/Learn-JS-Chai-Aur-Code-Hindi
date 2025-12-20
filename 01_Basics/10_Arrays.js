const superHero =["shakti","hi","night",["hello","good"],"spyderman","shaktiman"];


//Arrays Methods//

superHero.push('Ayman')
superHero.pop('Ayman')
superHero.pop('Ayman')

console.log(superHero[0]);
console.log(superHero[1]);
console.log(superHero[2]);

superHero.unshift('hellow world')
superHero.shift();

console.log(superHero.includes("hellow world"));
console.log(superHero.indexOf("night"));

const newArray = superHero.join();

console.log(newArray);
console.log(superHero);

//slice and splice method in Arrays//

//Array slice methods not change original array//

const newSlice = superHero.slice(1,3);

newSlice.push("ayman");

// console.log(newSlice);
console.log(superHero);

 //Array splice method is return a new Array//

const newSplice = superHero.splice(1,4);

newSplice.push('hello world')

// console.log(newSplice);
console.log(superHero);





