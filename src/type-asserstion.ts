// Type Assertion
let text: any;
text = "Next Level Web Development";
(text as string).indexOf("Web"); // Type Assertion

let counter: any;
counter = 345;
(counter as number).toFixed(1); // Type Assertion


const gramToKilo = (param: string | number): string | number | undefined => {
    if (typeof param === "string") {
        const value = parseFloat(param) * 1000;
        return `Weight is ${value}`
    } else if (typeof param === "number") {
        const value = param * 1000;
        return `Weight is ${value}`
    }
}

const stringValue = gramToKilo("10") as string; // Type Assertion
const numberValue = gramToKilo(10) as number; // Type Assertion


type ErrorType = {
    message: string
}
try {

} catch (error) {
    console.log((error as ErrorType).message) // Type Assertion
}