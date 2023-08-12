// type Gaurds

// 1 Way -> typeof
type WantedType = string | number;
function addToParam(param1: WantedType, param2: WantedType): WantedType {
    if (typeof param1 === "number" && typeof param2 === "number") {
        return param1 + param2
    } else {
        return param1.toString() + param2.toString()
    }
}
addToParam("2", "3")
addToParam(2, 3)


// 2 Way  -> in
type NormalUser = {
    name: string;
}
type AdminUser = {
    name: string;
    role: string;
}


const normaluser: NormalUser = {
    name: "Mr.X"
}
const adminUser: AdminUser = {
    name: "Mr.Y",
    role: "admin"
}

const getTypeWithTypeGaurd = (user: NormalUser | AdminUser): string => {
    if ("role" in user) {
        return "Admin User"
    } else {
        return "Normal User"
    }
}

const user11 = getTypeWithTypeGaurd(adminUser)
console.log(user11);


// 3 Way -->  
class AnimalClass {
    name: string;
    species: string;
    constructor(name: string, species: string) {
        this.name = name,
            this.species = species
    }

    makeSound(): string {
        return "Calling Parent Animal Class"
    }
}

class Dog extends AnimalClass {
    constructor(name: string, species: string) {
        super(name, species)
    }

    makeGeo() {
        console.log("Make Geo");
    }
}

class Cat extends AnimalClass {
    constructor(name: string, species: string) {
        super(name, species)
    }

    makeMew() {
        console.log("Make Meo");
    }
}

function getIntence(animal: AnimalClass) {
    if (animal instanceof Dog) {
        animal.makeGeo()
    } else if (animal instanceof Cat) {
        animal.makeMew()
    } else {
        animal.makeSound()
    }
}
const instance1 = new Dog("German", "Dog")
const instance2 = new Cat("Persian", "Cat")

getIntence(instance1)