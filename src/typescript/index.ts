let number: number = 5
let person: string = "Alex"

number = 58
person = "a"
let isActive: boolean = true

const error = (message: string): never => {
    throw new Error(message);
};

let userName: null | string | undefined = "Mary"