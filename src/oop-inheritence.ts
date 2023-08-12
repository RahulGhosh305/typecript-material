// OOP Inheritense
class Person {
    name: string;
    age: number;
    address: string;
    constructor(name: string, age: number, address: string) {
        this.name = name,
            this.age = age,
            this.address = address
    }

    makeSleep(hours: number): string {
        return `This Student ${this.name} is sleep ${hours} hours`
    }
}



class Student extends Person {
    constructor(name: string, age: number, address: string) {
        super(name, age, address)
    }
}
const Student101 = new Student("Mr.x", 22, "Dhaka")
const result201 = Student101.makeSleep(7);
console.log(result201);



class Teacher extends Person {
    designation: string;
    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address)
        this.designation = designation
    }
    takeClass(numOfClass: number): string {
        return `This Teacher ${this.name} is take ${numOfClass} hours`
    }
}
const teacher101 = new Teacher("Mr. y", 34, "Dhaka", "Professor");
console.log(teacher101.designation);