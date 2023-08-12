"use strict";
// OOP Abstruction
// Two way -> interface, abstruct class
class Vehicle {
    constructor(name, brand) {
        this.name = name,
            this.brand = brand;
    }
    startEngine() {
        console.log("Start");
    }
    endEngine() {
        console.log("End");
    }
    test() {
        console.log("Extra");
    }
}
const car = new Vehicle("Volvo", "X");
// Abstruct Class
class Vehicle2 {
    constructor(name, brand) {
        this.name = name,
            this.brand = brand;
    }
    moveEngine() {
        console.log("Move");
    }
}
class CarClass extends Vehicle2 {
    startEngine() {
        console.log("Start");
    }
    stopEngine() {
        console.log("Stop");
    }
}
const car22 = new CarClass("Bus", "Volvo");
car22.name;
