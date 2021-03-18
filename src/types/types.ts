//number types
const number1: number = 10;
let number2: number;
number2 = 50;
console.log(number2);

//string types
const animal: string = "summer";
console.log(typeof animal);

//boolean types
const isPlayer: boolean = false;
console.log(isPlayer);

//types with function
function addNumber(
  num1: number,
  num2: number,
  showNumber: boolean,
  showResult: string
) {
  if (showNumber) {
    console.log(num1 + num2);
  } else {
    const additionResult = num1 + num2;
    return showResult + additionResult;
  }
}
const isNumber: boolean = false;
const result: string = "result is : ";
const output = addNumber(10, 20, isNumber, result);
console.log(output);

//object types
const person: {
  name: string;
  age: number;
  friends: string[];
} = {
  name: "John",
  age: 32,
  friends: ["John", "smith", "kite"],
};
console.log(person.age); // typescript doesn't support any type of property only support when declare specific type
for (const friend of person.friends) {
  console.log(friend.toLocaleUpperCase());
}

//array types
const friends: string[] = ["John", "smith", "kite"];
friends.push("11");
console.log(friends);

//tuples types
const car: [string, number] = ["BMW", 1000]; //it's an array not only fixed length but also fixed type
console.log(car);

//enum types
enum userRole { //enum gives you enummerated list
  ADMIN,
  READONLY,
  USER,
}
console.log(userRole.ADMIN);

//dynamic or any type
let fruit: any;
fruit = "apple";
fruit = 10;
console.log(fruit);

let player: any[] = [];
player = ["10", "sakib", 50];

//union types
let arr: (string | number)[] = [];
arr = [10, "apple"];

const getNumber = (num1: number | string, num2: number | string) => {
  let result;
  if (typeof num1 === "number" && typeof num2 === "number") {
    result = num1 + num2;
    return result;
  } else {
    result = num1.toString() + num2.toString();
  }
  return result;
};
const showResult = getNumber("10", "60");
console.log(showResult);

//aliases types
type StringOrNumber = { name: string; age: number };
const oldPerson: StringOrNumber = { name: "John", age: 66 };
console.log(oldPerson);

type Combinable = string | number;
let tree: Combinable;
tree = "flower";

//unknown types
let userInput: unknown; // this is extra typechecking better then any
let user: string;
userInput = 10;
userInput = "summer";
if (typeof userInput === "string") {
  user = userInput;
}

//never types
const errorGenerate = (errMsg: string, code: number) => { // if any function generate error that type will never 
  throw { message: errMsg, errCode: code };
};
console.log(errorGenerate("something error", 2000));
