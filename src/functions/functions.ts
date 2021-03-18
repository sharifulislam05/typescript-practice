//function types
//if function not return something then type will void or set specific type
const addFunction = (num1: number, num2: number): void => {
  console.log(num1 + num2);
};
addFunction(5, 6);

//function types
let myFun: Function;
myFun = (): void => {
  console.log("this is a function type");
};
myFun();

//function signature
type userDetails = { name: string; age: number };

let userInfo: (obj: userDetails) => void;
userInfo = (obj: userDetails) => {
  console.log(`my name is ${obj.name} and age is ${obj.age}`);
};
userInfo({ name: "kite", age: 20 });

//function with callback
const addOnHandle = (
  num1: number,
  num2: number,
  callback: (num3: number) => void
) => {
  const result = num1 + num2;
  callback(result);
};
addOnHandle(90, 20, (output) => {
  console.log(output);
});

const names = ["Alice", "Bob", "Eve"];
const welcomePeoples = (x: string[] ) => {
  if (Array.isArray(names)) {
    console.log("Hello, " + x.join(" and "));
  }
};
welcomePeoples(names)
