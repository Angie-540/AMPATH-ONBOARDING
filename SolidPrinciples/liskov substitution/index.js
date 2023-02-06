//All this is stating is that every subclass/derived class should be substitutable for their 
//base parent class - a subclass should override the parent class methods in a way that does not
//break functionality from a client’ s point of view.

class Shape {
    displayShape() {
        console.log("I dunno the Shape")
    }
}
// every square is a rectangle but not every rectangle is a square; 4 sided-object
// class Square extends Shape {
//     constructor(size) {
//         super(size, size)
//     }
// }

class Trapezium extends Shape {
    displayShape() {
        console.log("This is Trapezium")
    }
}

class Rectangle extends Shape {
    displayShape() {
        console.log("This is rectangle")
    }
}
const shape = new Shape();
shape.displayShape();
const rect = new Rectangle();
rect.displayShape();
const trape = new Trapezium();
trape.displayShape();

//GOOD
// class Square extends Rectangle {
//     constructor(size) {
//         super(size, size)
//     }

//     set width(value) {
//         this._width = this._height = value
//     }

//     set height(value) {
//         this._width = this._height = value
//     }
// }