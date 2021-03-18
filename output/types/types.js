"use strict";
//number types
const number1 = 10;
let number2;
number2 = 50;
console.log(number2);
//string types
const animal = "summer";
console.log(typeof animal);
//boolean types
const isPlayer = false;
console.log(isPlayer);
//types with function
function addNumber(num1, num2, showNumber, showResult) {
    if (showNumber) {
        console.log(num1 + num2);
    }
    else {
        const additionResult = num1 + num2;
        return showResult + additionResult;
    }
}
const isNumber = false;
const result = "result is : ";
const output = addNumber(10, 20, isNumber, result);
console.log(output);
//object types
const person = {
    name: "John",
    age: 32,
    friends: ["John", "smith", "kite"],
};
console.log(person.age); // typescript doesn't support any type of property only support when declare specific type
for (const friend of person.friends) {
    console.log(friend.toLocaleUpperCase());
}
//array types
const friends = ["John", "smith", "kite"];
friends.push("11");
console.log(friends);
//tuples types
const car = ["BMW", 1000]; //it's an array not only fixed length but also fixed type
console.log(car);
//enum types
var userRole;
(function (userRole) {
    userRole[userRole["ADMIN"] = 0] = "ADMIN";
    userRole[userRole["READONLY"] = 1] = "READONLY";
    userRole[userRole["USER"] = 2] = "USER";
})(userRole || (userRole = {}));
console.log(userRole.ADMIN);
//dynamic or any type
let fruit;
fruit = "apple";
fruit = 10;
console.log(fruit);
let player = [];
player = ["10", "sakib", 50];
//union types
let arr = [];
arr = [10, "apple"];
const getNumber = (num1, num2) => {
    let result;
    if (typeof num1 === "number" && typeof num2 === "number") {
        result = num1 + num2;
        return result;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
};
const showResult = getNumber("10", "60");
console.log(showResult);
const oldPerson = { name: "John", age: 66 };
console.log(oldPerson);
let tree;
tree = "flower";
//unknown types
let userInput; // this is extra typechecking better then any
let user;
userInput = 10;
userInput = "summer";
if (typeof userInput === "string") {
    user = userInput;
}
//never types
const errorGenerate = (errMsg, code) => {
    throw { message: errMsg, errCode: code };
};
console.log(errorGenerate("something error", 2000));
