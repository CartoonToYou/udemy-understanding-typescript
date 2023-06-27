// Code goes here!

/* ====== Generic type ====== */
// const names: Array<string | number> = []; // string[] | number[];
// const names: Array<string> = [];
// names[0].split(' ');

/* ====== Promise type (Generic too) ====== */
// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10)
//   }, 2000)
// })

// promise.then(data => {
//   // data.split(' ');
// })

/* Generic type with constraints. */
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB)
}
// console.log(merge({name: 'Toon'}, {age: 30}));

const mergedObj = merge({name: 'Toon', hobbies: ['Sports']}, {age: 30})
// mergedObj.age()
// console.log(mergedObj.age);
console.log(mergedObj);

interface Lengthy {
  length: number
}

function countAndDescribe<T extends Lengthy>(element:T): [T, string] {
  let descriptionText = 'Got no value.';
  if(element.length === 1) descriptionText = 'Got 1 element.';
  else if (element.length > 1) descriptionText = 'Got ' + element.length + ' elements.'
  
  return [element, descriptionText]
}

console.log(countAndDescribe(['Sports', 'Cooking']));

/* keyof Constraints */
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return 'Value: ' + obj[key];
}
/* Compile error when using other key that not keyof first arg */
// extractAndConvert({}, 'name');
extractAndConvert({name: 'Toon'}, 'name')


class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item:T) {
    this.data.push(item);
  }

  removeItem(item:T) {
    if(this.data.indexOf(item) === -1) return;
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data]
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Toon');
textStorage.addItem('Chach');
textStorage.removeItem('Toon');
console.log(textStorage.getItems())

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const toonObj = {name: 'Toon'};
// objStorage.addItem(toonObj);
// objStorage.addItem({name: 'Chach'});

// objStorage.removeItem(toonObj);
// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

/* ====== Partial ====== */
function createCourseGoal(title: string, description: string, date: Date):CourseGoal {
  // return {title:title, description:description, completeUntil:date}
  /* Partial => optional key of object */
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

/* Readonly => can't mutate || not allow to change value */
const names:Readonly<string[]> = ['Toon', 'Chach'];
names.push('Manu');
names.pop();