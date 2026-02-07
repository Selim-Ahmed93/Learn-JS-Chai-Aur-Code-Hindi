
    //  const coding = ["Java","Ruby","Python","JS"];
    //  const values = coding.forEach( (items) =>{
    //         //    console.log(items);
    //         //    return items;
               
    //  })
    //  console.log(values);
     
// Important Note Foreach method no return any values//

const cars = [
    { make: "Toyota", model: "Corolla", year: 2022 },
    { make: "Tesla", model: "Model 3", year: 2021 },
    { make: "Ford", model: "Mustang", year: 1969 }
];

const allCars = cars.filter( (car) =>{
       return car.year <= 2025;
       
       
    })
    // console.log(allCars);

    const myNumber = [10,34,32,45];

    const newNum = myNumber
                 .map( (num) => num * 10 )
                 .map( (num) => num +1)
                 .map( (num) => num +10)
                 .filter( (num) => num <= 400 )

                 console.log(newNum);
                 


    // console.log(newNum);
    // console.log(myNumber);
    

    // const addValue = myNumber.map((num) =>{
    //     return num + 10
    //     //   return added;
    // });

    // console.log(addValue);
    