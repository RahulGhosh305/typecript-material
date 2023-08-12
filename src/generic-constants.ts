// Generic in Constants

interface IInformation {
    name: string;
    age: number;
}
const addMeWithMyCrush = <T extends IInformation>(info: T) => { // Contant type generic
    const crush = "Jenny";
    const newData = { ...info, crush }
    return newData
}
interface MyInfo {
    name: string;
    age: number;
    salary: number;
}
const myInformation: MyInfo = {
    name: "John",
    age: 33,
    salary: 222
}
const result110 = addMeWithMyCrush(myInformation)

