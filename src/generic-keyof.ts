// Generic KeyOf
type InformationType = {
    name: string;
    age: number;
}
type PersonTypeWithKeyOf = keyof InformationType; // Output as like = name | age
const checkPerson11: PersonTypeWithKeyOf = "name";


const getKeyOf = <X, Y extends keyof X>(obj: X, param: Y) => {
    obj[param]
}
const result112 = getKeyOf({ name: "John", age: 33 }, "age")