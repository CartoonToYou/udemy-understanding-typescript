// const person: {name: string; age: number; hobbies: string[]; role: [number, string]} = {
//   name: 'Chachchai',
//   age: 30,
//   hobbies: ["Running", 'Reading'],
//   role: [2,'author']
// }

// const ADMIN = 0
// const READ_ONLY = 1
// const AUTHOR = 2

// enum Role {ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 200}

// const person = {
//   name: 'Chachchai',
//   age: 30,
//   hobbies: ["Running", 'Reading'],
//   role: Role.ADMIN
// }

// // person.role.push('admin');
/* !!! Array().push is NOT SUPPORTED in Tuple of typescript !!! */
// // person.role[1] = 10;

// // person.role = [0, 'admin', 'user']

// let favoriteActivity: string[];
// favoriteActivity = ['Toon']

// console.log(person.name)

// for(const hobby of person.hobbies) {
//   console.log(hobby.toLocaleUpperCase());
//   // console.log(hobby.map()) !!! ERROR !!!
// }

// if(person.role === Role.ADMIN) {
//   console.log('is admin');
// }

/* Alias Type with Union Type */
// type Combinable = number | string;
/* Alias Type with Literal Type */
// type ConversionDescriptor = 'as-number' | 'as-text'

// function combine(input1: Combinable, input2: Combinable, resultConversion: ConversionDescriptor) {
//   let result;
//   if(typeof input1 ==='number' && typeof input2 === 'number' || resultConversion === 'as-number'){
//     result = +input1 + +input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   return result

//   // if(resultConversion === 'as-number') {
//   //   return +result;
//   // } else {
//   //   return result.toString();
//   // }
// }

// const combineAges = combine(30, 26, 'as-number');
// console.log(combineAges)

// const combineStringAges = combine('30', '26', 'as-number')
// console.log(combineStringAges)

// const combineName = combine('Toon', 'Tong', 'as-text')
// console.log(combineName)

/* WITHOUT Alias Type */
// function greet(user: { name: string; age: number }) {
//   console.log('Hi, I am ' + user.name);
// }
 
// function isOlder(user: { name: string; age: number }, checkAge: number) {
//   return checkAge > user.age;
// }

/* WITH Alias Type */
// type User = { name: string; age: number };
 
// function greet(user: User) {
//   console.log('Hi, I am ' + user.name);
// }
 
// function isOlder(user: User, checkAge: number) {
//   return checkAge > user.age;
// }

function add(n1:number, n2:number) {
  return n1+n2;
}

/* Return something with type function(): type */
/* Don't return nothing or produce nothing from function use "void" */
function printResult(num:number): void {
  console.log('Result: '+ num);
}

function addAndHandle(n1:number, n2:number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5,12))

/* Plain function */
// let combineValues: Function;

/* Function that no recieve any params and return number */
// let combineValues: (a: number, b: number) => number;

/* Function that recieve 2 params and return number */
let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;
/* assign new value and call it that not function will error when runtime */
// combineValues = 5

console.log(combineValues(8,10));

addAndHandle(10, 20, (result) => {
  console.log(result);
  return result;
})

/* Type unknown */
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

if(typeof userInput === 'string') {
  userName = userInput;
}

/* Type never */
function generateError(message: string, code: number): never {
  throw {message: message, code: code};
}

generateError('An error occured!', 500)