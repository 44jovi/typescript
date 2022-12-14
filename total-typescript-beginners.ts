// Solution snippets from Matt Pocock's Beginner's TypeScript Tutorial (Total TypeScript).
// Not intended for compiling into .js format.

// 01-number.solution
const addTwoNumbers = (a: number, b: number) => {
  return a + b;
};

// 02-object-param.solution.1
const addTwoNumbers = (params: { first: number; second: number }) => {
  return params.first + params.second;
};

// 02-object-param.solution.2
type AddTwoNumbersArgs = {
  first: number;
  second: number;
};

const addTwoNumbers = (params: AddTwoNumbersArgs) => {
  return params.first + params.second;
};

// 02-object-param.solution.3
interface AddTwoNumbersArgs {
  first: number;
  second: number;
}

const addTwoNumbers = (params: AddTwoNumbersArgs) => {
  return params.first + params.second;
};

// 03-optional-properties.solution
const getName = (params: { first: string; last?: string }) => {
  if (params.last) {
    return `${params.first} ${params.last}`;
  }
  return params.first;
};

// 04-optional-properties.solution
const getName = (first: string, last?: string) => {
  if (last) {
    return `${first} ${last}`;
  }
  return first;
};

// 05-assigning-types-to-variables.solution
interface User1 {
  id: number;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
}

const defaultUser1: User1 = {
  id: 1,
  firstName: "Adonis",
  lastName: "Creed",
  isAdmin: true,
};

// 06-unions.solution
interface User2 {
  id: number;
  firstName: string;
  lastName: string;
  role: "admin" | "user" | "super-admin";
}

const defaultUser2: User2 = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  // @ts-expect-error
  role: "I_SHOULD_NOT_BE_ALLOWED",
};
