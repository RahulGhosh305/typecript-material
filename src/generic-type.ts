// Generic Type Alias
type GenericInType<T> = Array<T>

const rollNum: GenericInType<number> = [2, 4, 63, 5, 23];
const studentName: GenericInType<string> = ["A", "C", "F", "B"];
const checkBoolean: GenericInType<boolean> = [true];
const checkObj: GenericInType<{ name: string, age: number }> = [
    {
        name: "John",
        age: 33
    },
    {
        name: "Doe",
        age: 34
    }
]

// Tuples Generic
type GeneticInTuples<X, Y> = [X, Y]
const relation: GeneticInTuples<string, number> = ["John", 33]
interface IInfo {
    name: string
}
const info: GeneticInTuples<IInfo, number> = [
    {
        name: "john"
    },
    34
]