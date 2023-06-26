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