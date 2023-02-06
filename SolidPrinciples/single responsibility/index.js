//A class should have one and only one reason to change, meaning that a class should only have one job.
class Car {
    constructor(name, model, year) {
        this.name = name;
        this.model = model;
        this.year = year;
    }
    getCar(id) {
        return this.http.get('api/cars/' + id)
    }
    saveCar() {
        return this.post("api/cars", { name: this.name, model: this.model, year: this.year })

    }
}
//The car model was meant to represent a car but it has a getcar method; giving it another responsibility.
// we can separate the responsibilities to different classes.

class Car {
    constructor(name, model, year) {
        this.name = name;
        this.model = model;
        this.year = year;
    }
}
class CarService {
    getCar(id) {
        return this.http.get('api/cars/' + id)
    }
    saveCar(car) {
        this.http.post('api/cars', car)
    }
}