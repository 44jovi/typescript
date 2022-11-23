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
