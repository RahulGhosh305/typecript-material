"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Asynchronus TypeScript
const makePromise = () => {
    return new Promise((resolve, reject) => {
        const data = "fetch data";
        if (data) {
            resolve(data);
        }
        else {
            reject("Failed");
        }
    });
};
const makePromiseBoolean = () => {
    return new Promise((resolve, reject) => {
        const data = true;
        if (data) {
            resolve(data);
        }
        else {
            reject("Failed");
        }
    });
};
const makePromiseObject = () => {
    return new Promise((resolve, reject) => {
        const data = { data: "fetch data" };
        if (data) {
            resolve(data);
        }
        else {
            reject("Failed");
        }
    });
};
const getPromiseData = () => __awaiter(void 0, void 0, void 0, function* () {
    const result123 = yield makePromise();
    return result123;
});
const getPromiseBooleanData = () => __awaiter(void 0, void 0, void 0, function* () {
    const result123 = yield makePromiseBoolean();
    return result123;
});
const getPromiseObjectData = () => __awaiter(void 0, void 0, void 0, function* () {
    const result123 = yield makePromiseObject();
    return result123;
});
const getTodo = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholder.typicode.com/posts/1');
    const respose = yield data.json();
    return respose;
});
const getTodoData = () => __awaiter(void 0, void 0, void 0, function* () {
    const resultData = yield getTodo();
    // console.log(resultData);
});
getTodoData();
