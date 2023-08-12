// Function
function addNormal(num1: number, num2: number): number {
    return num1 + num2;
}
addNormal(3, 5);

function addDefaultParameter(num1: number, num2: number = 10): number { // DefaultParameter
    return num1 + num2;
}
addDefaultParameter(5);

const addArrow = (num1: number, num2: number): number => {
    return num1 + num2;
}
addArrow(5, 6);

const createUserMethod: {
    name: string;
    balance: number;
    addBalance(money: number): number // Method Type
} = {
    name: "John",
    balance: 5,
    addBalance(money: number): number { // Method
        return this.balance + money;
    }
}

// Speard Operator
const myFriends: string[] = ["Mina", "Tina", "Rita"];
const newFriends: string[] = ["Sajib", "Kamal", "Jamal"];

myFriends.push(...newFriends)
console.log(myFriends);

// Rest Operator
function greeting(...friends: string[]): void {
    console.log(friends);
    friends.forEach(friend => {
        console.log(`Hi ${friend}`);
    });
}
greeting("Joy", "Rahul", "Rajib", "Sajib");

// Destructure
const Obj: {
    name: string;
    age: number;
} = {
    name: "Joy",
    age: 66
}
const { age } = Obj;