"use strict";
//function types
//if function not return something then type will void or set specific type
const addFunction = (num1, num2) => {
    console.log(num1 + num2);
};
addFunction(5, 6);
//function types
let myFun;
myFun = () => {
    console.log("this is a function type");
};
myFun();
let userInfo;
userInfo = (obj) => {
    console.log(`my name is ${obj.name} and age is ${obj.age}`);
};
userInfo({ name: "kite", age: 20 });
//function with callback
const addOnHandle = (num1, num2, callback) => {
    const result = num1 + num2;
    callback(result);
};
addOnHandle(90, 20, (output) => {
    console.log(output);
});
const names = ["Alice", "Bob", "Eve"];
const welcomePeoples = (x) => {
    if (Array.isArray(names)) {
        console.log("Hello, " + x.join(" and "));
    }
};
welcomePeoples(names);
