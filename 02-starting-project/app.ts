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

type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text'

function combine(input1: Combinable, input2: Combinable, resultConversion: ConversionDescriptor) {
  let result;
  if(typeof input1 ==='number' && typeof input2 === 'number' || resultConversion === 'as-number'){
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result

  // if(resultConversion === 'as-number') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}

const combineAges = combine(30, 26, 'as-number');
console.log(combineAges)

const combineStringAges = combine('30', '26', 'as-number')
console.log(combineStringAges)

const combineName = combine('Toon', 'Tong', 'as-text')
console.log(combineName)