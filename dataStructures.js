//Create a function that adds data to an array and another function that removes data from the array.
//initialize array

const cars = ["BMW X6", "Mercedes", "Mark 6", "Harrier"]
    //to add elements to an array
    // cars.push("Premio")
    // console.log(cars)
    //to remove elements from an array
    //cars.pop("BMW X6")
    // console.log(cars)

//function to add multiple values to an array
const addCars = (car) => {
    return car.forEach(element => {
        cars.push(element)
    });
}

//function addCars(car) {
//const newArr = car;
//return cars.push(newArr)
//}

addCars(["Premio", "toyota"]);

console.log(cars)
    //function to remove elements from an array
const removeCar = (car) => {
    cars.splice(cars.indexOf(car), 0);
}

const replace = (index, car) => {
    cars.splice(index, 1, car);
}


replace(1, "toyota");
console.log(cars)

console.log(cars)
