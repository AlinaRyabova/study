// let price = 0;
// const subscription = "free";

// if (subscription === "pro") {
//   price = 100;
// }

// console.log("price", price);

const grade = 55;

// if (grade >= 90) {
//   console.log("Perfectly");
// } else if (grade >= 80) {
//   console.log("Good");
// } else if (grade >= 70) {
//   console.log("Satisfactorily");
// } else {
//   console.log("Unsatisfactorily");
// }

// const result =
//   grade >= 90 ? "Perfectly" : grade >= 70 ? "Good" : "Satisfactorily";
// console.log(result);
// const fruit = "kiwi";

// switch (fruit) {
//   case "apple":
//     console.log("Apple selected");
//     break;
//   case "banana":
//     console.log("Banana selected");
//     break;
//   case "orange":
//     console.log("Orange selected");
//     break;
//   default:
//     console.log("The fruit is unknown");
// }

// const day = 7;

// switch (day) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     console.log("This is a working day");
//     break;
//   case 6:
//   case 7:
//     console.log("It is a day off");
//     break;
//   default:
//     console.log("Invalid");
// }
// function checkAge(age) {
//   if (age >= 18) {
//     return "You are an adult";
//   }
// }
// console.log(checkAge(20));
// console.log(checkAge(15));
// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return "There are no products in the order!";
//   } else if (available < ordered) {
//     return "Your order is too large, there are not enough items in stock!";
//   } else {
//     return "The order is accepted, our manager will contact you";
//   }
// }
// console.log(checkStorage(5, 4));
// console.log(checkStorage(4, 5));
// console.log(checkStorage(5, 0));
// console.log(checkStorage(5, 5));
// function checkPassword(password) {
//   const correctPassword = 123456;
//   if (password === correctPassword) {
//     return "Access granted";
//   } else {
//     return "Access denied, wrong password!";
//   }
// }

// function checkPassword(password) {
//   const correctPassword = 123456;

//   const login =
//     password === correctPassword
//       ? "Access granted"
//       : "Access denied, wrong password!";
//   return login;
// }

// console.log(checkPassword(456780));
// console.log(checkPassword(123456));
// function getSubscriptionPrice(type) {
//   switch (type) {
//     case "starter":
//       return 0;

//     case "professional":
//       return 20;

//     case "organization":
//       return 50;
//     default:
//       return "Invalid subscription type!";
//   }
// }
// console.log(getSubscriptionPrice("professional"));
// console.log(getSubscriptionPrice("organization"));
// console.log(getSubscriptionPrice("starter"));
// console.log(getSubscriptionPrice("random"));
// function isNumberInRange(start, end, number) {
//   if (start <= number && number <= end) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));

// function checkAccess(subType) {
//   if (subType === "pro" || subType === "vip") {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(checkAccess("pro"));
// console.log(checkAccess("starter"));
// console.log(checkAccess("vip"));

// function toggleModalVisibility(isVisible) {
//   return !isVisible;
// }
// console.log(toggleModalVisibility(true));
// console.log(toggleModalVisibility(false));
