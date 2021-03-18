//Function and optional function argument
let subNumber;
const myFunc = (b, a, c = "true", d) => {
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
