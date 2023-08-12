// Generic Function and Tuples

function createArray(param: string): string[] {
    return [param]
}
const result1 = createArray("Ban");

const createArray1 = <T>(param: T): T[] => {
    return [param]
}
const result2 = createArray1<string>("Ban");
const result3 = createArray1<number>(11);
const result4 = createArray1<{ name: string }>({ name: "Joy" });


// Generic Function in Tuples
const createArray2 = <X, Y>(param1: X, param2: Y): [X, Y] => {
    return [param1, param2]
}
const result5 = createArray2<{ name: string }, boolean>({ name: "Joy" }, true);

// Spreading declearing issue solve by Generic
const meAddmyCurshMind = <T>(info: T) => {
    const myCursh = "Jerry";
    const newData = { ...info, myCursh }
    return newData;
}

const myInfo: {
    name: string;
    age: number;
    salary: number;
} = {
    name: "John",
    age: 33,
    salary: 30000
}
const result11 = meAddmyCurshMind(myInfo)
