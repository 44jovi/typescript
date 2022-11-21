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