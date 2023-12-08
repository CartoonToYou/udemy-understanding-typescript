// Code goes here!
// import _ from "lodash";

// declare var GLOBAL: any;
// console.log(GLOBAL);

// console.log(_.shuffle([1, 2, 3]));

import "reflect-metadata";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";

import { Product } from "./product.model";

const products = [
  { title: "A Carpet", price: 29.99 },
  { title: "A Book", price: 10.99 },
];

// const p1 = new Product("A Book", 12.99);
// console.log(p1.getInformation());

/* Traditional */
// const loadedProducts = products.map((prod) => {
//   return new Product(prod.title, prod.price);
// });
// for (const prod of loadedProducts) {
//   console.log(prod.getInformation());
// }

/* with class-transformer */
const loadedProducts = plainToInstance(Product, products);
for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}

/* with class-validator */
const newProd = new Product("", -5.99);
validate(newProd).then((errors) => {
  if (errors.length > 0) {
    console.log("VALIDATION ERRORS!");
    console.log(errors);
  } else {
    console.log(newProd.getInformation());
  }
});
