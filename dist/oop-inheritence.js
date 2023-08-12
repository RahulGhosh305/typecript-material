"use strict";
// OOP Inheritense
class Person {
    constructor(name, age, address) {
        this.name = name,
            this.age = age,
            this.address = address;
    }
    makeSleep(hours) {
        return `This Student ${this.name} is sleep ${hours} hours`;
    }
}
class Student extends Person {
    constructor(name, age, address) {
        super(name, age, address);
    }
}
const Student101 = new Student("Mr.x", 22, "Dhaka");
const result201 = Student101.makeSleep(7);
console.log(result201);
class Teacher extends Person {
    constructor(name, age, address, designation) {
        super(name, age, address);
        this.designation = designation;
    }
    takeClass(numOfClass) {
        return `This Teacher ${this.name} is take ${numOfClass} hours`;
    }
}
const teacher101 = new Teacher("Mr. y", 34, "Dhaka", "Professor");
console.log(teacher101.designation);
