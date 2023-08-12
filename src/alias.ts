// Type Alise
type CrushType = {
    name: string;
    age?: number;
    profession: string;
    address: string;
}

const crush1: CrushType = {
    name: "Mina",
    age: 33,
    profession: "Web Developer",
    address: "Dhaka",
}

const crush2: CrushType = {
    name: "Tina",
    profession: "Web Developer",
    address: "Comilla",
}

type CrushMarridType = boolean;
const isCrushMarrid: CrushMarridType = false;

type NumberType = number;
const allFoundNumber: NumberType[] = [33, 88, 6]

type OperationType = (x: number, y: number) => number;
const calcuate = (num1: number, num2: number, operation: OperationType) => {
    return operation(num1, num2)
}
calcuate(10, 20, (x, y) => x + y)