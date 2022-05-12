"use strict";

console.log("Task1");

function solveEquation(a, b, c) {
  let arr = [];
  let Discrim = Math.pow(b ^ 2) - (4 * a * c);
  arr.push(Discrim);
  console.log(arr);

  if (Discrim < 0) {
    console.log(arr);
  } else if (Discrim = 0) {
    console.log("1 Root = " + (-b) / (2 * a));
  } else if (Discrim > 0) {
    console.log(["1 Root = " + (-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)]);    
    }
};
