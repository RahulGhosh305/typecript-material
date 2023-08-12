"use strict";
// OOP Class Declearation
class Animal {
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(`The ${this.name} says ${this.sound}`);
    }
}
const dog1 = new Animal("German", "dog", "Gew Gew");
dog1.makeSound();
const cat1 = new Animal("Persian", "cat", "Meo Meo");
cat1.makeSound();
