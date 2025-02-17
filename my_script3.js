// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }
// function findNumberFromFive(max, target) {
//   console.log("Log in the body of the function before the cycle");

//   for (let i = 5; i <= max; i += 1) {
//     console.log("Current counter value i:", i);

//     if (i === target) {
//       console.log(
//         `Found the number ${target}, we make a return, interrupting the loop and function`
//       );
//       return i;
//     }
//   }

//   // Цей console.log не виконується
//   console.log("Log in body function after cycle");
// }

// const result = findNumberFromFive(10, 6);
// console.log("Log after exiting function");
// console.log(`Result of function execution ${result}`);

// console.log(findNumberFromFive(10, 6));
// function calculateTotal(number) {
//   let total = 0;
//   for (let i = 1; i <= number; i += 1) {
//     if (i % 2 === 0) {
//       total += i;
//     }
//   }
//   return total;
// }

// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// let start = 17;
// let end = 25;
// let number = 0;
// for (let i = start; i <= end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// console.log(number);
// function findNumber(start, end, divisor) {
//   let number = 0;
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
// }
// console.log(findNumber(6, 9, 3));
// console.log(findNumber(2, 6, 5));
// console.log(findNumber(16, 35, 7));
// const arr1 = [1, 2, 3];
// const arr2 = arr1;
// arr1[1] = 1;
// arr2[2] = 1;
// console.log(arr1);
// console.log(arr2);
// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];

// fruits[1] = "peach";
// fruits[fruits.length - 1] = "banana";

// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);
// console.log(fruits);
// function getExtremeElements(array) {
//   return [array[0], array[array.length - 1]];
// }
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));
// console.log(getExtremeElements(["apple", "banana"]));
// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }
// const planets = ["Earth", "Mars", "Venus"];

// for (const planet of planets) {
//   console.log(planet);
// }
// function calculateTotalPrice(order) {
//   let total = 0;
//   for (const item of order) {
//     total += item;
//   }
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// const heartPattern = (name) => {
//   let output = "";

//   for (let y = 15; y > -15; y--) {
//     let line = "";
//     for (let x = -30; x < 30; x++) {
//       let equation = Math.pow(x * 0.05, 2) + Math.pow(y * 0.1, 2) - 1;
//       let condition =
//         Math.pow(equation, 3) - Math.pow(x * 0.05, 2) * Math.pow(y * 0.1, 3) <=
//         0;

//       line += condition ? name[Math.abs((x - y) % name.length)] : " ";
//       output += line + "\n";
//     }
//   }
//   console.log(output);
// };

// heartPattern("KoxaYou");

// const heartPattern = (name) => {
//   let output = "";

//   for (let y = 15; y > -15; y--) {
//     let line = "";
//     for (let x = -30; x < 30; x++) {
//       let equation = Math.pow(x * 0.05, 2) + Math.pow(y * 0.1, 2) - 1;
//       let condition =
//         Math.pow(equation, 3) - Math.pow(x * 0.05, 2) * Math.pow(y * 0.1, 3) <=
//         0;

//       line += condition ? name[Math.abs((x - y) % name.length)] : " ";
//     }
//     output += line + "\n";
//   }

//   console.log(output);
// };

// // Виклик функції
// heartPattern("❤️");
// heartPattern("KoxaYou");
// function getEvenNumbers(start, end) {
//   let arr = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }
// console.log(getEvenNumbers(2, 5));
// function checkStorage(storage, item) {
//   let lowerCaseItem = item.toLowerCase();
//   if (storage.includes(lowerCaseItem)) {
//     return `${lowerCaseItem} is available to order!`;
//   } else {
//     return "Sorry! We are out of stock!";
//   }
// }
// console.log(checkStorage(["apple", "plum", "pear"], "plum"));
// console.log(checkStorage(["apple", "plum", "pear"], "orange"));
// console.log(checkStorage(["apple", "plum", "pear"], "pEAr"));
// function getCommonElements(array1, array2) {
//   let arr = [];
//   for (let element of array1) {
//     if (array2.includes(element)) {
//       arr.push(element);
//     }
//   }
//   return arr;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [5, 4, 6]));
// console.log(getCommonElements([2, 4, 8], [2, 4, 6]));
// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// function createReversedArray() {
//   let arr = Array.from(arguments);
//   return arr.reverse();
// }
// console.log(createReversedArray(12, 85, 37, 4));
// console.log(createReversedArray(2, 4, 8));
// function calculateTax(amount, taxRate = 0.2) {
//   return amount * taxRate;
// }
// console.log(calculateTax(100, 0.1));
// console.log(calculateTax(100));
