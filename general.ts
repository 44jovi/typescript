// -----
// 'any'
// -----

// Avoid using 'any' where possible
// Negates benefits of TypeScript

// If no type set, defaults to 'any'
let someVar1;

// 'any' means literally any data type is allowed
let someVar2: any;

someVar2 = "some text string";
someVar2 = 44;
someVar2 = true;
someVar2 = {};

// ---------------
// Implicit typing
// ---------------

// Assigning a number here sets this variable's type to number
let someNumber = 23;

someNumber = 44;
someNumber = "Strings are not allowed!";

// -----------------
// Custom interfaces
// -----------------

// 'interface' defines structure of custom objects
// Declares the data type of each of the object's properties
interface Insect {
  name: string;
  legs: number;
  commonColours: string[]; // array of strings
  [key: string]: any;
}

const bee: Insect = {
  name: "Bee",
  legs: 6,
  commonColours: ["black", "yellow"],
  optionalProp1: "Some optional string property",
  optionalProp2: 44,
};

// ------------
// Custom types
// ------------

// Example 1

// Declare alias types
type Cm = number;
type Kg = number;

// Declare new type using predefined type aliases
type Person = {
  name: string;
  height: Cm;
  weight: Kg;
};

// Declare and initialise the custom type's properties
const Joe: Person = {
  name: "Joe",
  height: 175,
  weight: 80,
};

// Example 2

type FontStyle = "bold" | "italic" | "underline";

let font: FontStyle;

font = "something not allowed";
font = "bold";
font = "italic";
font = "underline";

// ---------------
// Function typing
// ---------------

// Example 1
// Function arguments must be numbers
// Return value must be a string
function power(x: number, y: number): string {
  return Math.pow(x, y).toString();
}

// Example 2
// Use 'void' if expecting no return value (e.g. a side effect)
let arr = [];

function addNumToArr(x: number): void {
  arr.push(x);
}
