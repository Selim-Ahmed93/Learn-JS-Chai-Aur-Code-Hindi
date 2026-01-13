(function chai(){
    console.log('DB CONNECTED');
})();

// Arrow Function With IIFE//

(() =>{
    console.log('DB Connect Two');
    
})();

((name) =>{
    console.log(`DB CONNECT THREE ${name}`);
    
})('hitesh');

((name) => console.log (`DB CONNECT FIVE ${name}`))('hitesh')