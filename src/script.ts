
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
