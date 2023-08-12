"use strict";
// type Gaurds
function addToParam(param1, param2) {
    if (typeof param1 === "number" && typeof param2 === "number") {
        return param1 + param2;
    }
    else {
        return param1.toString() + param2.toString();
    }
}
addToParam("2", "3");
addToParam(2, 3);
const normaluser = {
    name: "Mr.X"
};
const adminUser = {
    name: "Mr.Y",
    role: "admin"
};
const getTypeWithTypeGaurd = (user) => {
    if ("role" in user) {
        return "Admin User";
    }
    else {
        return "Normal User";
    }
};
const user11 = getTypeWithTypeGaurd(adminUser);
console.log(user11);
// 3 Way -->  
class AnimalClass {
    constructor(name, species) {
        this.name = name,
            this.species = species;
    }
    makeSound() {
        return "Calling Parent Animal Class";
    }
}
class Dog extends AnimalClass {
    constructor(name, species) {
        super(name, species);
    }
    makeGeo() {
        console.log("Make Geo");
    }
}
class Cat extends AnimalClass {
    constructor(name, species) {
        super(name, species);
    }
    makeMew() {
        console.log("Make Meo");
    }
}
function getIntence(animal) {
    if (animal instanceof Dog) {
        animal.makeGeo();
    }
    else if (animal instanceof Cat) {
        animal.makeMew();
    }
    else {
        animal.makeSound();
    }
}
const instance1 = new Dog("German", "Dog");
const instance2 = new Cat("Persian", "Cat");
getIntence(instance1);
