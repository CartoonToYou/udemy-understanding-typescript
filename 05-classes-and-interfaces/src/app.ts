// Function ==================================================
/* type Function */
// type AddFn = (a: number, b: number) => number;
/* interface Function */
interface AddFn {
  (a:number, b:number): number;
}

let add: AddFn;

add = (n1: number, n2:number) => {
  return n1+n2;
}

interface AddFn {
  (a:number, b:number): number;
}


// ==================================================
/* type => for flexible type of data in object */
// type Person = {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

/* interface => like type but usually using for describe type of data or data structure in object only */
// interface Person {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

interface Named {
  /* Add ? for optional property */
  readonly name?: string;
  outputName?: string;
}

/* interface => usually using for describe type of data or data structure in object only */
/* Can be extends from another interface */
/* Extends with another interface more than 1 with comma */
// ,AnotherInterface
interface Greetable extends Named {
  greet(phrase: string): void;
}

/* implements with another interface more than 1 with comma */
// ,AnotherInterface
class Person implements Greetable {
  name?: string;
  age = 30;

  constructor(n: string = '') {
    if(n) {
      this.name = n;
    }
  }
  
  greet(phrase: string) {
    if(this.name) {
      console.log(phrase + ' ' + this.name);
    } else {
      console.log('Hi!');
    }
  }
}

// let user: Person ✔ (because Person is class that implements interface from Greetable)
let user1: Greetable;

user1 = new Person(); /* If has ? will be optional params */
// user1 = new Person('Toon'); 
// user1.name = 'Max' ❌ (because name is readonly property)

user1.greet('Hi there, I\'m')
console.log(user1);