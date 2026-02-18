
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

                //  console.log(newNum);
                 


    //  console.log(newNum);
    // console.log(myNumber);
    

    // const addValue = myNumber.map((num) =>{
    //     return num + 10
    //     //   return added;
    // });

    // console.log(addValue);

    // ................Reduce methods in Js...................//

    const myArr = [5,6,4,7,8];

    const myArr2 = myArr.reduce( (acc,curval) => acc + curval , 0)

        // console.log(`acc : ${acc} cur : ${curval}`);
        
                        // return acc + curval;
    

    //  console.log(myArr2);

    const shopingCard = [
        {
            itemsName: ' js course',
            Price:2999,
        },
        {
          itemsName:'Python Course',
          Price:3999,
        },
        {
            itemsName:'Mobail development course',
            Price:6999,
        },
    ]

    const totalPrice = shopingCard.reduce( (acc,curr) => acc + curr.Price ,0);

    console.log(totalPrice);
    


    