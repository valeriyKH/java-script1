"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let Discrim = Math.pow(b ^ 2 - 4 * a * c);
  let root1;
  let root2;

  if (Discrim > 0) {
    root1 = (- b + Math.sqrt(Discrim) ) / (2 * a);
    root2 = (- b - Math.sqrt(Discrim) ) / (2 * a);

    arr.push(root1.toFixed(0));
    arr.push(root2.toFixed(0));
    console.log(arr);
  } else if (Discrim === 0) {
    root1 = (-b / (2 * a));
    arr.push(root1.toFixed(0));
    console.log(arr);
  } else  {
    console.log(arr);
  }
};  
  
  

solveEquation(1, 5, 4);