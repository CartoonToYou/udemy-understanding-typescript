// Code goes here!

/* abstract => using for force other inheritance class must override method that has abstract keyword */
abstract class Department {
  // private id: string;
  // private name: string;
  /* Shorthand when use TS is constructor(private id: string, private name: string) */
  /* protected => like private but inheritance class can access this property too */
  protected employees: string[] = [];
  static fiscalYear = 2020;
  // name: string = ''
  
  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = name;
    /* Shorthand when use TS is constructor(private id: string, private name: string) */
    /* readonly => TS only using for freeze variable value from when it declare. */

    /* Accessing to static */
    // ❌ console.log(this.fiscalYear) => This can't access to static in class.
    // ✔ console.log(Department.fiscalYear) => This is the way to access static in class. 
  }

  /* static => create Global property or method in class that can access from every where without new keyword
     ex. Math.pow(), Math.floor() - pow and floor is static method
  */
  static createEmployee(name: string) {
    return { name: name };
  }

  /* abstract => using for force other inheritance class must override method that has abstract keyword */
  abstract describe(this: Department): void;

  public addEmployee(employee:string) {
    // this.id = 'd2';
    this.employees.push(employee)
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id:string, admins: string[]) {
    /* super => using for call base constructor of the base class */
    super(id, 'IT');
    /* If want to Call this, need to call after super */
    this.admins = admins;
  }

  describe() {
    console.log('IT Department - ID: ', this.id)
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  /* USING with Private Constructor */
  private static instance: AccountingDepartment;
  
  /* get => other can access this property by using get keywords (although private prop) */
  get mostRecentReport() {
    /* Must return something */
    if(this.lastReport) return this.lastReport;
    throw new Error('No report found!');
  }

  set mostRecentReport(value: string) {
    if(!value) throw new Error('Please pass in a valid value!')
    this.addReports(value)
  }

  
  /* private (constructor) => Singleton & Private Constrcutors: Can call new Instance only one times */
  private constructor(id:string, private reports:string[]) {
    super(id, 'Accounting')
    this.lastReport = reports[0];
  }

  /* USING with Private Constructor
  if has instace will return existed instance
  else create new instance 
  */
  static getInstance() {
    if(AccountingDepartment.instance) return this.instance;
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
  }

  describe() {
    console.log('Accounting Department - ID: ', this.id);
  }

  addEmployee(name:string) {
    if(name === 'Max') return;
    this.employees.push(name);
  }

  addReports(text:string) {
    this.reports.push(text);
    this.lastReport = text
  }

  getReports() {
    console.log(this.reports);
  }
}
// const itDep = new ITDepartment('d2', 'IT');
// console.log(itDep)

/* Call method or property that has static prefix without new keyword */
const employee1 = Department.createEmployee('Jack');
console.log('employee1: ', employee1, Department.fiscalYear)

const dt = new ITDepartment('d1', ['Max']);

dt.addEmployee('Toon');
dt.addEmployee('Chach');

// dt.employees[2] = 'Tae';


dt.describe();
// dt.name = 'New Name';
dt.printEmployeeInformation();
// const dtCopy = { name: 'DUMMY',describe: dt.describe }

// dtCopy.describe();
console.log('DT: ',dt)

// const accounting = new AccountingDepartment('d2', []);
/* Call private constructor */
const accounting = AccountingDepartment.getInstance();
const accountingCopied = AccountingDepartment.getInstance();
console.log('accounting: ', accounting);
console.log('accountingCopied: ',accountingCopied)
/* [END] private constructor => accounting & accountingCopied is the same instance */

accounting.describe()
/* Call setter with value */
accounting.mostRecentReport = 'Year End Report'

accounting.addReports('Something went wrong...');

/* Call getter */
console.log(accounting.mostRecentReport);

accounting.addEmployee('Tae')

accounting.getReports()
console.log('accounting: ', accounting)

