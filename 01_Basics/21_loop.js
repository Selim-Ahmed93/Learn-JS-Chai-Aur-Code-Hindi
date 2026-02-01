//  const myArr = ['apple', 'orange','banana','mango']
//  for(let i = 0; i <= 10; i++) {
//     const element = i;
 
  
  

//  if(element== 5){
//     console.log('5 is best Number') 
//  }

//     console.log(element);
    
    
// }

//  Lets Start For Of LOOP IN JS//

const myArr = [4,5,6,3,6,7];
     for (const element of myArr) {
        console.log(element);
        if (element== 9) {
         console.log('this is number 6');
         
        }
        else{
         console.log('this number no find');
         
        }
     }

     // For Of Loop in   objects //

     const person = {
            name:'selim ahmed',
            address: 'Dhaka',
            idCard:736353,
            loggedIn: true,
     }

      for (const element of Object.keys(person)){
      //   console.log(element);
        
     }

     // MAP 
     const map = new Map();
     map.set('IN',"INDIA");
     map.set('BD', "BANGLADESH");
     map.set('USA',"United State Of America");

   //   console.log(map);

   for (const [key,value] of map) {
      console.log(key,':-',value);
      
   }
     
     