import { log } from "console"

let number: number = 5
let person: string = "Alex"

number = 58
person = "a"
let isActive: boolean = true

const error = (message: string): never => {
    throw new Error(message);
};

let userName: null | string | undefined = "Mary"

const numbers: Array<number> = [1, 2, 3, 4, 5, 6]

const string: number[] = [1, 2, 3, 4, 5, 6]

const names: Array<number | boolean | string> = [1, 2, 3, 4, 5, 6]

interface IUser {
    name: string;
    age: number;
    isActive: boolean;
    location: string;
};

let user:IUser = {
    name: "Mary",
    age: 25,
    isActive: true,
    location: "Brazil"
}

user.age = 35

enum Statuses {
    Created = "Account created successfully",
    NotFound = "User with email not found",
    BadRequest = "The entered data is not correct"
}

 console.log(Statuses.Created)
