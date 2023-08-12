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
function getIntenceNap(inteance: ParentClass) {
    inteance.takeNap()
}
// output
// I am Parent
// I am Student
// I am Developer

const inteance301 = new ParentClass()
const inteance302 = new StudentClass()
const inteance303 = new DeveloperClass()

getIntenceNap(inteance301);
getIntenceNap(inteance302);
getIntenceNap(inteance303);

// Example Another

class Shape {
    getShape(): number {
        return 0
    }
}
class Circle extends Shape {
    radius: number
    constructor(radius: number) {
        super()
        this.radius = radius
    }
    getShape(): number {
        return Math.PI * this.radius * this.radius
    }
}
class Reatangle extends Shape {
    height: number;
    weight: number;
    constructor(height: number, weight: number) {
        super()
        this.height = height,
            this.weight = weight
    }
    getShape(): number {
        return this.height * this.weight
    }
}

function getAreaOfShape(param: Shape) {
    console.log(param.getShape());
}

const circle1 = new Circle(10)
getAreaOfShape(circle1)
const rec1 = new Reatangle(10, 20)
getAreaOfShape(rec1)