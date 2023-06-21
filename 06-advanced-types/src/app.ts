// Code goes here!

/* Describe object structure with [type] */
type Admin = {
    name: string;
    privilages: string[];
  }
type Employee = {
  name: string;
  startDate: Date;
}
type ElevatedEmployee = Admin & Employee; /* => Intersection type */

/* Describe object structure with [interface] */
// interface Admin {
//   name: string;
//   privilages: string[];
// }
// interface Employee {
//   name: string;
//   startDate: Date;
// }
// interface ElevatedEmployee extends Employee, Admin {} /* => Intersection type */

const e1: ElevatedEmployee = {
  name: 'Toon',
  privilages: ['create-server'],
  startDate: new Date()
}

/* Union type */
type Combinable = string | number;
type Numeric = number | boolean;

/* Intersection type */
type Univeral = Combinable & Numeric;

/* ====== Type Guards Concept ====== */
// function add(a: Combinable, b: Combinable) {
//   if(typeof a === 'string' || typeof b === 'string') { /* => type gurads */
//     return a.toString() + b.toString()
//   }
//   return a+b
// }

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee): void {
  console.log('Name: ' + emp.name);
  if('privilages' in emp) { /* type guards (in object => for check if this object has this property) */
    console.log('Privilages: ' + emp.privilages)
  }
  if('startDate' in emp) { /* type guards (in object => for check if this object has this property) */
    console.log('Start date: ' + emp.startDate)
  }
}

printEmployeeInformation(e1);
// printEmployeeInformation({name: 'Chach', startDate: new Date()});

class Car {
  drive() {
    console.log('Driving...')
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo...' + amount)
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // if('loadCargo' in vehicle) { /* type guards with in statement */
  //   vehicle.loadCargo(1000);
  // }
  if(vehicle instanceof Truck) { /* type gruards with instanceof */
    vehicle.loadCargo(1000)
  }
}

useVehicle(v1);
useVehicle(v2);

/* ====== Discriminated Union concept ====== */
interface Bird {
  type: 'bird' /* => Literal type using for discriminated type safety */
  flyingSpeed: number;
}

interface Horse {
  type: 'horse' /* => Literal type using  for discriminated type safety */
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  // if('flyingSpeed' in animal) {
  //   console.log('Moving with speed: ' + animal.flyingSpeed)
  // }
  let speed
  switch(animal.type) { /* Discriminated Union */
    case 'bird':
      speed = animal.flyingSpeed;
    break;
    case 'horse':
      speed = animal.runningSpeed;
  }
  console.log('Moving at speed: ', speed);
}

moveAnimal({type:'bird', flyingSpeed: 10})


/* ====== type casting concept ====== */
// const paragraph = document.querySelector('p');
// const paragraph = document.getElementById('message-output');

// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!; /* type casting ✔ */
const userInputElement = document.getElementById('user-input')! as HTMLInputElement; /* type casting ✔ */
/* ! => The expression in front of it will never yield null */
/* Using if check instead of ! */
// if(userInputElement) {
//   userInputElement.value = 'Hi! there';
// }
// (userInputElement as HTMLInputElement).value = 'Hi! there' /* type casting ✔ (without declare in document.something) */
userInputElement.value = 'Hi! there';

/* ====== Index Properties ====== */
interface ErrorContainer { // { email: 'Not a valid email!', username: 'Must start with a capital character!' }
  [prop: string]: string; /* => Index Properties => describe key/property type (usually use for validate form that don't know exactly structure) */
}

const errorBag: ErrorContainer = {
  email:'Not a valid email!',
  username: 'Must start with a capital character!'
}

/* ====== Function Overloads ====== */
function add(a:number, b:number): number; // Function Overloads => Add specific type to function with Function Overloads
function add(a:string, b:string): string; // Function Overloads => Add specific type to function with Function Overloads
function add(a:string, b:number): string; // Function Overloads => Add specific type to function with Function Overloads
function add(a:number, b:string): string; // Function Overloads => Add specific type to function with Function Overloads
function add(a: Combinable, b: Combinable) {
  if(typeof a === 'string' || typeof b === 'string') { /* => type gurads */
    return a.toString() + b.toString()
  }
  return a+b
}

const result = add('Toon','Chach');
// result.split(" "); /* => This won't work without Function Overload */

/* ====== Optional Chaining ====== */
const fetchedUserData = {
  id: 'u1',
  name: 'Toon',
  job: {
    title: 'DEV',
    description: 'My start-up company'
  }
}

console.log(fetchedUserData?.job?.title); // Optional Chaining (JS & TS is same)

/* ====== Nullish Coalescing ====== */
const userInput = ''; // storedData will return '';
// const userInput = undefined; // storedData will return 'DEFAULT' (because of Nullish Coalescing)
// const userInput = null; // storedData will return 'DEFAULT' (because of Nullish Coalescing)

const storedData = userInput ?? 'DEFAULT'; // if userInput is null or undefined (only this 2 types will return right value after ?? => JS & TS is same)

console.log(storedData); 