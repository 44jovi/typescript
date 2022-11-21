/*
This .ts file is not intended for being compiled into a .js file.
Only to be used as reference - using a linter to show code allowed/disallowed by TypeScript.
To test specific snippets, copy code to a different .ts file before compiling.
*/

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

const arrayOfInsects: Insect[] = [];

arrayOfInsects.push(1);
arrayOfInsects.push({
  name: "Grasshopper",
  legs: 6,
  commonColours: ["green", "brown"],
});

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

// ---------
// Functions
// ---------

// Example 1
// Function arguments must be numbers
// Return value must be a string
function power(x: number, y: number): string {
  return Math.pow(x, y).toString();
}

// Example 2
// Use 'void' if expecting no return value (e.g. a side effect)
let array1 = [];

function addNumToArr(x: number): void {
  array1.push(x);
}

// -------------------
// Arrays (and Tuples)
// -------------------

// Example 1 (Array)
const array2: number[] = [];

array2.push(1);
array2.push("some string");
array2.push(true);

// Also see example above with 'arrayOfInsects'

// Example 2 (Tuple)
type SomeTuple1 = [number, string, boolean];

const array3: SomeTuple1[] = [[1, "Hi!", true]];

array3.push(1);
array3.push([2, "Bye!", false]);

// Example 3 (Tuple)
// '?' makes the argument optional *but* maintains the type if it is passed in
type SomeTuple2 = [number?, string?, boolean?];

const array4: SomeTuple2[] = [];

array4.push([1, "Greetings", "I need to be a boolean value."]);
array4.push([1, "Greetings", true]);
array4.push([1, "Greetings"]);
array4.push([1]);
array4.push([]);

// --------
// Generics
// --------

// **To be reviewed**

class Observable<T> {
  constructor(public value: T) {}
}

let x: Observable<number>;
let y: Observable<Insect>;
let z = new Observable(44);
