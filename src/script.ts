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
const addNumber = (num1: number, num2: number) => {
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
let a: string | number;
a = 5;
console.log(a);

let arr: (string | number)[] = [];
arr.push("rakib");
console.log(arr);

let car: {
  name: string;
  price: number;
};
car = {
  name: "bmw",
  price: 10,
};
console.log(car);

//dynamic type or any
let carPrice: any;
carPrice = 50;
console.log(carPrice);

let cycle: any = [];
cycle.push("cyna");

let bike: {
  name: any;
  price: any;
};
bike = {
  name: 5,
  price: "66",
};

//Function and optional function argument
let subNumber: Function;
const myFunc = (
  b: string,
  a: number,
  c: string = "true",
  d?: number
): string => {
  console.log(c);
  console.log(a + b);
  return a + b;
};
myFunc("10", 20, "sakib");

//type aliases
type stringOrNum = string | number;
type userType = { name: string; age: number };
const userDetails = (id: stringOrNum, user: userType) => {
  console.log(
    `your id is ${id}  and  your name is ${user.name} and age is ${user.age}`
  );
};
const details = { name: "kite", age: 10 };
userDetails(10, { name: "kite", age: 10 });

//function signature
let myFunck: (num1: number, num2: number) => number;
myFunck = (a: number, b: number) => {
  return a + b;
};

let calculation: (num1: number, num2: number, total: number) => number;
calculation = (x: number, y: number, z: number) => {
  if (x > y) {
    return x + y;
  } else {
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
import { IsPlayer } from "./interfaces/isPlayer";

let player1: IsPlayer;
player1 = new Players("sakib", 25, "bangladesh");
const player2 = new Players("rakib", 50, "bangladesh");
console.log(player2.play());
//class custom type
let sakib: Players[] = [];
sakib.push(player1);
console.log(sakib);
console.log(player1.country);

//interface for object

interface Rectangle {
  width: number;
  height: number;
}
function drawRectangle(options: Rectangle) {
  let width = options.width;
  let height = options.height;
  console.log(width);
}
// const draw = { width: 99, height: 10, radius: 30 };
//if you use direct argument then input exact parameter
drawRectangle({ width: 99, height: 10 });

//generic for object

const addId = <
  T extends {
    name: string;
    age: number;
  }
>(
  obj: T
) => {
  let id = Math.floor(Math.random() * 100);
  return { ...obj, id };
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
enum Rtype {
  SUCCESS,
  FAILURE,
  AUTHENTICATED,
  ERROR,
}
interface ApiResponse<T> {
  status: number;
  type: Rtype;
  data: T;
}
const response1: ApiResponse<object> = {
  status: 200,
  type: Rtype.ERROR,
  data: {
    name: "test",
    somethings: 300,
  },
};
console.log(response1);

//tuples
const arr2: [string, number, object] = ["test", 100, { a: 100 }];
console.log(arr2);
