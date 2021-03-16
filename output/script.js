//type checking
let country = "bangladesh";
country = "10";
console.log(country);
//array
let friends = ["sakib", "rakib", "sumon"];
friends.push("10");
friends.push("sakib");
console.log(friends);
//function
const addNumber = (num1, num2) => {
    return num1 + num2;
};
console.log(addNumber(10, 20));
//object
let fruits = {
    price: 10,
    color: "green",
    fruitName: "apple",
};
fruits.price = 100;
console.log(fruits);
//explicit and union type
let a;
a = 5;
console.log(a);
let arr = [];
arr.push("rakib");
console.log(arr);
let car;
car = {
    name: "bmw",
    price: 10,
};
console.log(car);
//dynamic type or any
let carPrice;
carPrice = 50;
console.log(carPrice);
let cycle = [];
cycle.push("cyna");
let bike;
bike = {
    name: 5,
    price: "66",
};
//Function and optional function argument
let subNumber;
const myFunc = (b, a, c = "true", d) => {
    console.log(c);
    console.log(a + b);
    return a + b;
};
myFunc("10", 20, "sakib");
const userDetails = (id, user) => {
    console.log(`your id is ${id}  and  your name is ${user.name} and age is ${user.age}`);
};
const details = { name: "kite", age: 10 };
userDetails(10, { name: "kite", age: 10 });
//function signature
let myFunck;
myFunck = (a, b) => {
    return a + b;
};
let calculation;
calculation = (x, y, z) => {
    if (x > y) {
        return x + y;
    }
    else {
        return x - y;
    }
};
console.log(calculation(10, 20, 30));
// classes and custom class type and access modifier
// class Players {
//   public name: string;
//   private age: number;
//   readonly country: string;
//   constructor(name: string, age: number, country: string) {
//     this.name = name;
//     this.age = age;
//     this.country = country;
//   }
//   //shortcut for class access modifier must be use access modifier
//   //   constructor(
//   //     public name: string,
//   //     private age: number,
//   //     readonly country: string
//   //   ) {}
//   play() {
//     console.log(
//       `my name is ${this.name} and my age is ${this.age} and my country is ${this.country}`
//     );
//   }
// }
import { Players } from "./classes/player.js";
let player1;
player1 = new Players("sakib", 25, "bangladesh");
const player2 = new Players("rakib", 50, "bangladesh");
console.log(player2.play());
//class custom type
let sakib = [];
sakib.push(player1);
console.log(sakib);
console.log(player1.country);
function drawRectangle(options) {
    let width = options.width;
    let height = options.height;
    console.log(width);
}
// const draw = { width: 99, height: 10, radius: 30 };
//if you use direct argument then input exact parameter
drawRectangle({ width: 99, height: 10 });
//generic for object
const addId = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
const user = addId({
    name: "sakib",
    age: 10,
    country: "United States",
});
// const user = addId("ss");
console.log(user);
//generic for interface
//enum type
var Rtype;
(function (Rtype) {
    Rtype[Rtype["SUCCESS"] = 0] = "SUCCESS";
    Rtype[Rtype["FAILURE"] = 1] = "FAILURE";
    Rtype[Rtype["AUTHENTICATED"] = 2] = "AUTHENTICATED";
    Rtype[Rtype["ERROR"] = 3] = "ERROR";
})(Rtype || (Rtype = {}));
const response1 = {
    status: 200,
    type: Rtype.ERROR,
    data: {
        name: "test",
        somethings: 300,
    },
};
console.log(response1);
//tuples
const arr2 = ["test", 100, { a: 100 }];
console.log(arr2);
