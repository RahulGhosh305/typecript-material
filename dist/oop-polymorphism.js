"use strict";
// OOP Polymorphism
class ParentClass {
    takeNap() {
        console.log("I am Parent");
    }
}
class StudentClass {
    takeNap() {
        console.log("I am Student");
    }
}
class DeveloperClass {
    takeNap() {
        console.log("I am Developer");
    }
}
// Polymorphism function
function getIntenceNap(inteance) {
    inteance.takeNap();
}
// output
// I am Parent
// I am Student
// I am Developer
const inteance301 = new ParentClass();
const inteance302 = new StudentClass();
const inteance303 = new DeveloperClass();
getIntenceNap(inteance301);
getIntenceNap(inteance302);
getIntenceNap(inteance303);
// Example Another
class Shape {
    getShape() {
        return 0;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getShape() {
        return Math.PI * this.radius * this.radius;
    }
}
class Reatangle extends Shape {
    constructor(height, weight) {
        super();
        this.height = height,
            this.weight = weight;
    }
    getShape() {
        return this.height * this.weight;
    }
}
function getAreaOfShape(param) {
    console.log(param.getShape());
}
const circle1 = new Circle(10);
getAreaOfShape(circle1);
const rec1 = new Reatangle(10, 20);
getAreaOfShape(rec1);
