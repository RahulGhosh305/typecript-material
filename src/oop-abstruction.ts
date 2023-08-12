// OOP Abstruction
// Two way -> interface, abstruct class

// Using Interface
interface IVehicle {
    startEngine(): void,
    endEngine(): void,
}

class Vehicle implements IVehicle {
    name: string;
    brand: string
    constructor(name: string, brand: string) {
        this.name = name,
            this.brand = brand
    }
    startEngine(): void {
        console.log("Start");
    }
    endEngine(): void {
        console.log("End");
    }
    test(): void {
        console.log("Extra");
    }
}

const car = new Vehicle("Volvo", "X")

// Abstruct Class

abstract class Vehicle2 {
    name: string;
    brand: string;
    constructor(name: string, brand: string) {
        this.name = name,
            this.brand = brand
    }
    abstract startEngine(): void
    abstract stopEngine(): void
    moveEngine(): void {
        console.log("Move");
    }
}

class CarClass extends Vehicle2 {
    startEngine(): void {
        console.log("Start");
    }
    stopEngine(): void {
        console.log("Stop");
    }
}

const car22 = new CarClass("Bus", "Volvo")
car22.name