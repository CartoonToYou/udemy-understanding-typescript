// Code goes here!

class Department {
  // private id: string;
  // private name: string;
  /* Shorthand when use TS is constructor(private id: string, private name: string) */
  private employees: string[] = [];
  
  constructor(private readonly id: string, private name: string) {
    // this.id = id;
    // this.name = n;
    /* Shorthand when use TS is constructor(private id: string, private name: string) */
    /* readonly => TS only using for freeze variable value from when it declare. */
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`)
  }

  public addEmployee(employee:string) {
    this.id = 'd2';
    this.employees.push(employee)
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const dt = new Department('d1','Digital Technology');

dt.addEmployee('Toon');
dt.addEmployee('Chach');

// dt.employees[2] = 'Tae';


dt.describe();
// dt.name = 'New Name';
dt.printEmployeeInformation();
// const dtCopy = { name: 'DUMMY',describe: dt.describe }

// dtCopy.describe();