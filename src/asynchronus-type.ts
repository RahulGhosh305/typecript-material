// Asynchronus TypeScript
const makePromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const data: string = "fetch data";
        if (data) {
            resolve(data)
        } else {
            reject("Failed")
        }
    })
}

const makePromiseBoolean = (): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
        const data: boolean = true;
        if (data) {
            resolve(data)
        } else {
            reject("Failed")
        }
    })
}

type DataType = {
    data: string;
}
const makePromiseObject = (): Promise<DataType> => {
    return new Promise<DataType>((resolve, reject) => {
        const data: DataType = { data: "fetch data" };
        if (data) {
            resolve(data)
        } else {
            reject("Failed")
        }
    })
}

const getPromiseData = async (): Promise<string> => {
    const result123 = await makePromise()
    return result123
}

const getPromiseBooleanData = async (): Promise<boolean> => {
    const result123 = await makePromiseBoolean()
    return result123
}

const getPromiseObjectData = async (): Promise<object> => {
    const result123 = await makePromiseObject()
    return result123
}




interface ITodo {
    id: number;
    title: string;
    body: string;
    userId: number;
}

const getTodo = async (): Promise<ITodo> => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const respose = await data.json()
    return respose;
}

const getTodoData = async () => {
    const resultData = await getTodo()
    // console.log(resultData);
}

getTodoData()