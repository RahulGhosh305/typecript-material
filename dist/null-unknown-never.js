"use strict";
//Null - Never - Unknown
function checkNull(value) {
    if (value === null) {
        console.log("Not Found");
    }
    else {
        console.log("Searching");
    }
}
checkNull(null);
const getMySpeed = (speed) => {
    if (typeof speed === "number") {
        const convertedSpeed = (speed * 1000) / 3600;
        console.log(`My Speed is ${convertedSpeed}`);
    }
    else if (typeof speed === "string") {
        const [value, unit] = speed.split(" ");
        const convertedSpeed = (parseInt(value) * 1000) / 3600;
        console.log(`My Speed is ${convertedSpeed}`);
    }
    else {
        console.log("Wrong type");
    }
};
getMySpeed(10);
getMySpeed("10 kmh^-1");
function throwError(message) {
    throw new Error(message);
}
throwError("Vhul aseee");
