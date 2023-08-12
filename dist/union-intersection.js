"use strict";
var level;
(function (level) {
    level["Senior"] = "Senior";
    level["Junior"] = "Junior";
    level["Middle"] = "Middle";
})(level || (level = {}));
const juniorDeveloper = {
    name: "John",
    experience: 2,
    expertise: "JavaScript"
};
const seniorDev = {
    name: "John",
    experience: 2,
    expertise: "Java",
    level: level.Senior
};
