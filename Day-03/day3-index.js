/*ππππππππππππππππππππ*/
/*ππππππππππ DAY-3 πππππππ*/
/*ππππππππππππππππππππ*/

/*ππππππππππππππππππππππππππ
πππ π TOPICS and THEORY ππππ

π€π€π€π€π€π€π€π€π€ MODERN JAVASCRIPT π€π€π€π€π€π€π€π€π€π€

π₯29)
      ECMAScript:
                  βοΈβοΈβοΈβοΈ HISTORY βοΈβοΈβοΈβοΈ
                  1996: Javascript was first created.
                  1997: ECMA International, It was then submitted to ECMA International for standardization, which resulted in ECMAScript.
                  2015: ES6, Decided to switch to annual releases of ECMAScript.

                  ββββ TIMELINE ββββ
                  2015: ECMAScript 2015, which is also known as #ES6 or #ECMAScript-6. sbse bade update isme aaye.
                  2016: ECMAScript 2016, Which is also known as ES7 or ECMAScript7
                  2017: ECMAScript 2017, Which is also known as ES8 or ECMAScript8
                  2018: ECMAScript 2018, Which is also known as ES9 or ECMAScript9
                  2019: ECMAScript 2019, Which is also known as ES10 or ECMAScript10
                  2020: ECMAScript 2020, Which is also known as ES11 or ECMAScript11

                  π·π»π·π»π·π»π·π» SERVICES π·π»π·π»π·π»π·π»
                  πECMAScript 2015 (ES6) updated features:
                                                          π‘ LET and CONST
                                                          π‘ Template Literals
                                                          π‘ Default Arguments
                                                          π‘ Destructuring
                                                          π‘ Object Properties
                                                          π‘ Arrow Functions
                                                          π‘ Rest Operators
                                                          π‘ Spread operators

π₯30) 
     πππ FEATURES OF ECMAScript 2015 is also known as ES6 πππ

    1οΈβ£ VAR vsLET vs CONST:
                            π1. var and let are mutable while const isn't.
                            π2. var => Function Scope
                                  let and const => Block Scope
    
    2οΈβ£ Template Literals (Template Strings):
                            π Template Literals use back-ticks (``) rather than the quotes ("") to define a string:
                            π Template literals allow variables in strings:
                                      e.g; console.log(`My name is ${myFirstName}`)

    3οΈβ£ Default Arguments:
                      π Default functions parameters allow named parameters to be initialized with default values if no value or undefined is passed.

    4οΈβ£ Destructuring:
    5οΈβ£ Object Properties:
    6οΈβ£ Arrow Function:
                      π» Nornal way of writing Function-
                          console.log(sum()) // he sum of the two number is 11.
                          function sum() {
                            let a = 5;
                            let b = 6;
                            let sum = a + b;
                            return (`The sum of the two number is ${sum}.)
                          }

                      π» Converting the same in fat arrow function-
                          
    7οΈβ£ Rest Operators:
    8οΈβ£ Spread Operators:


π₯31)
      ππ» Arrays In Javascript:
                            ποΈ When we use var, we can store only one value at a time.
                                e.g; let friend1 = "Ravi"
                                e.g; let friend2 = "Rohit"
                                e.g; let friend3 = "Manihs"

                            ποΈ When we feel like storing multiple values in one variable, then instead of var  , we will use an array.
                                  e.g;
                                      π¦ let myFriends = ["Ravi", "Rohit", "Manish"]

                                       π¦ let student1 = ["Ravi Prakash", "26", male, true]

                                       π¦ var myFriends = new Array;


                            ποΈ In JavaScript, we have an Array Class, and arrays are the prototype.

π₯32)
     Array Methods:
                  ποΈ Traversal of an array:
                                      π§­ Navigate through an array.
                                          π» For Loop
                                          π» For In Loop
                                          π» For Of Loop
                                          π» For each Loop

                  ποΈ Searching and filter in an array:
                                          π» Array.indexof()
                                          π» Array.includes()
                                          π» Array.find((currVal) => {}) (returns only one value)
                                          π» Array.filter((currVal)=> {currVal<400})
                                          

                  ποΈ How to sort and compare an array:
                                          π» Array.sort()


                  ποΈ How to insert, add, replace and delete elements in an array:
                                          π» Array.push() // returns the new length of arr
                                          π» Array.unshift()
                                          π» Array.pop()
                                          π» Array.shift()

                  ποΈ Map(), Reduce(), Filter()

π₯32)
      ππ»ββοΈ Challenge Time (Sorting):
                                π€― Sort the array in descending order-
                                      const fruits = ["Banana", "Orange", "Apple"]
                                π€― How to sort the numbers in the array in ascending-
                                      const arr1 = [1, 30, 4, 21, 100000, 99]
              


π₯33)
      ππ»ββοΈ Challenge Time:
                            const months = ["Jan", "march", "April", "June, "July"]
                            1: Add Dec at the end of an Array?
                            2: What is the return value of splice method?
                            3: update march to March (update) ?
                            4: Delete June from an array ?

π₯34)
      ππ»ββοΈ Challenge Time:
                          βοΈπ€― 1- Find the square root of each element in an array.
                                  let arr = [25, 36, 49, 64, 81]
                          βοΈπ€― 2- Multiply each element by 2 and return only those elements which are greater than 10?
                                  let arr = [2,3,4,6,8]

π₯35)
     How to flattten an array
     Converting 2d and 3d array into one Dimensional array
                  const arr = [
                                ["zone-1", "Zone-2"],
                                ["Zone-3", "Zone-4"], 
                                ["Zone-5", "Zone-6"], 
                                ["Zone-7", "Zone-8"]
                              ]

ππππππππππππππππππππππππππ*/

/*ππππππππ TOPICS and PRACTICAL πππππππππ*/
// π₯30)
/*1οΈβ£ LET vs CONST vs VAR*/

/*π1. var and let are mutable while const isn't.*/
/* var */
// var myName = "Vishal Singh";
// console.log(myName);
// myName = "Vishal Chauhan";
// console.log(myName);

/* let */
// let myName = "Vishal Singh";
// console.log(myName);
// myName = "Vishal Chauhan";
// console.log(myName);

/* const */
// const myName = "Vishal Singh";
// console.log(myName);
// myName = "Vishal Chauhan";
// console.log(myName); // βERROR- Assignment to constant variable

/*π2. var is function scope while let and const are block scope.*/
/*
// VAR
function data() {
  var myFirstName = "Vishal";
  console.log(myFirstName);

  if (true) {
    var myLastName = "Chauhan";
    console.log("inner " + myLastName);
    console.log("inner " + myFirstName);
  }

  console.log("innerOuter " + myLastName);
}
data();
*/

/*
// LET
function data() {
  let myFirstName = "Vishal";
  console.log(myFirstName);

  if (true) {
    let myLastName = "Chauhan";
    console.log("inner " + myLastName);
    console.log("inner " + myFirstName);
  }

  console.log("innerOuter " + myLastName); //βERROR- myLastName is not defined
}
data();
*/

/*
// CONST
function data() {
  const myFirstName = "Vishal";
  console.log(myFirstName);

  if (true) {
    const myLastName = "Chauhan";
    console.log("inner " + myLastName);
    console.log("inner " + myFirstName);
  }

  console.log("innerOuter " + myLastName); //βERROR- myLastName is not defined
}
data();
*/

/*2οΈβ£ Template Literals (Template Strings)*/
/*
JAvascript progrm to print table for a given number (4)?
βοΈ OUTPUT: 4 * 1 = 4;
*/
// SOL-
for (let i = 1; i <= 10; i++) {
  let tableOf = 4;
  // console.log(`${tableOf} * ${i} = ${tableOf * i} `);
}

/* 3οΈβ£ Default Arguments*/
function fullName(fName = "John", lName = "Doe") {
  console.log(`${fName} ${lName}`);
}
// fullName(); // John Doe (if no parameter passed, default parameters gets used up)
// fullName("Vishal", "Chauhan"); // Vishal Chauhan
// fullName("Vishal"); // Vishal Doe (since only one argument is passed, so another gets taken up from default parameters)

/* 4οΈβ£ Destructuring */
// LATER AFTER WE LEARN ARRAY

/* 5οΈβ£ Object Properties */
// LATER AFTER WE LEARN ARRAY

/* 6οΈβ£ Arrow Function */
/*
// π» Nornal way of writing Function-
console.log(sum()); // The sum of the two number is 11.
function sum() {
  let a = 5;
  let b = 6;
  let sum = a + b;
  // return `The sum of the two number is ${sum}.`;
}
*/

/*
// π» Converting the same in fat arrow function-

// console.log(sum()); // Cannot access 'sum' before initialization

const sum = () => {
  // let a = 5;
  // let b = 6;
  // return `The sum of the two number is ${a + b}.`;

  return `The sum of the two number is ${(a = 5) + (b = 6)}.`;
};

console.log(sum()); // The sum of the two number is 11.
*/

/* 7οΈβ£ Rest Operators */
// LATER AFTER WE LEARN ARRAY

/* 7οΈβ£ Spread Operators: */
// LATER AFTER WE LEARN ARRAY

// π₯31) ππ» Arrays In Javascript
let names = ["Ravi", "Rohit", "Manish", "Vishal", "RT", "Chauhan"];

// βοΈ Accessing values from the array.
// console.log(names[0]); // Ravi
// console.log(names[1]); // Rohit
// console.log(names[2]); // Manish

// π₯32) Array Methods:
// let names = ["Ravi", "Rohit", "Manish", "Vishal", "RT", "Chauhan"];

/* β‘οΈ Traversal of an array */
// console.log(names[0]); // Ravi
// console.log(names[3]); // Vishal
// console.log(names[names.length - 1]); // Chauhan (last element of the array)

/* length of an array */
// console.log(names.length); // 6
// console.log(names[names.length - 1]); // Chauhan (last element of the array)

/* We use for loop to navigate */
for (let i = 0; i < names.length; i++) {
  // console.log(names[i]);
}

/* for in loop */
for (let elements in names) {
  // console.log(elements); // prints index numbers
  // console.log(names[elements]); // prints names with respective indexes
}

/* for of loop */
for (let elements of names) {
  // console.log(elements); // prints all the names in the array
}

/* for each loop */
names.forEach(function (element, index, array) {
  // console.log(element + " Index: " + index + " " + array);
});

names.forEach((element, index, array) => {
  // console.log(element + " Index: " + index + " " + array);
});

/* β‘οΈ Searching and Filter In an Array*/
let friendsnames = [
  "Ravi",
  "Rohit",
  "Manish",
  "Vishal",
  "RT",
  "Vishal",
  "Chauhan",
];

// Indexof and lastIndexOf
// console.log(friendsnames.indexOf("Vishal")); // 3
// console.log(friendsnames.indexOf("Viiishal")); // -1

// console.log(friendsnames.lastIndexOf("Vishal")); // 5
// console.log(friendsnames.lastIndexOf("Viiiishal")); // -1

// includes
// console.log(friendsnames.includes("RT")); // true
// console.log(friendsnames.includes("TR")); // false

// find
const prices = [200, 300, 350, 400, 450, 500, 600];

const findElems = prices.find((currentVal, index, prices) => {
  return currentVal < 400;
});
// console.log(findElems); // 200 (returns only one value)

// console.log(prices.find((currentVal, index, prices) => currentVal < 400)); //200
// console.log(prices.find((currentVal, index, prices) => currentVal > 1400)); //undefined

// findIndex
// console.log(prices.findIndex((currentVal, index, prices) => currentVal < 400)); // 0 (index)
// console.log(prices.findIndex((currentVal, index, prices) => currentVal > 1400)); // -1 (index)

//filter
const newPriceTag = prices.filter((currVal, index) => {
  return currVal < 400; // case-1
  // return currVal > 1400; // case-2
});
// console.log(newPriceTag); // [200, 300, 350] // case-1
// console.log(newPriceTag); // [] // case-2

/* β‘οΈ How to sort and compare an array */
const months = [
  "January",
  "Febraury",
  "March",
  "April",
  "June",
  "August",
  "November",
  "December",
];

// console.log(months.sort()); // "April", "August", "December", "February", "January", "June"...

const nums = [1, 2, 3, 4, 5, 10, 13, 20, 50, 100, 400, 1000];
// console.log(nums.sort()); // 1, 20, 100, 1000, 13, 2, 20, 3, 4, 400, 5, 50
// console.log(nums.sort((a, b) => a - b)); // 1,2,3,4,5,10,13,20,50,100,400,1000

/* β‘οΈ How to insert, add, replace and delete elements in an array */
const animals = ["Pigs", "Goats", "Sheep"];

// π¨π»βπ¬ PUSH Method (Add's the value to the end of the array)
const newArr = animals.push("Hen");

// console.log(animals); // [ 'Pigs', 'Goats', 'Sheep', 'Hen' ]
// console.log(newArr); // 4 (returns the new length of thwe array)

// animals.push("Dinosaur", "Hippo", "Rhino");
// console.log(animals); // "Pigs", "Goats", "Sheep", "Hen", "Horse", "Dinosaur", "Hippo"...

// π¨π»βπ¬ UNSHIFT Method (Add's the value to the beginning of the array)
const newArr2 = animals.unshift("Murga");
// console.log(animals); // [ 'Murga', 'Pigs', 'Goats', 'Sheep', 'Hen' ]
// console.log(newArr2); // 5 (returns new length of arr)

const myNums = [1, 2, 3, 5];
// console.log(myNums.unshift(4, 6)); // 6 (length of the arr)
// console.log(myNums); // [ 4, 6, 1, 2, 3, 5 ]

// π¨π»βπ¬ POP Method (Removes the last value from the array)
const dishes = ["idli", "Dosa", "Burger", "Pizza"];
// console.log(dishes.pop()); // pizza (the element which got removed)
// console.log(dishes); // [ 'idli', 'Dosa', 'Burger' ]

// π¨π»βπ¬ SHIFT Method (Removes the first value from the array)
const sports = ["Soccer", "Cricket", "Squash", "BAd-Minton"];
// console.log(sports.shift()); // Soccer (the element which got removed)
// console.log(sports);

/* β‘οΈ MAP , FILTER, REDUCE */
/* MAP */
const array1 = [2, 3, 4, 6, 7, 9, 10, 12, 13, 15];
// console.log(array1.map((val) => val ** 2)); // [4,9,16,36,49,81,100,144,169,225]

/* FILTER */
// console.log(array1.filter((val) => val > 7)); // [ 9, 10, 12, 13, 15 ]

/* REDUCE */
console.log(
  array1.reduce((previousValue, currentValue) => previousValue + currentValue)
); // 81

let arr = [1, 2, 3, 4];
let sum = arr.reduce((accu, currElem, index, arr) => {
  return accu + currElem;
});
// console.log(sum); // 10

// π₯32)ππ»ββοΈ Challenge Time (Sorting)
/*
π€― Sort the array in descending order-
      const fruits = ["Banana", "Orange", "Apple"]
π€― How to sort the numbers in the array in ascending-
      const arr1 = [1, 30, 4, 21, 100000, 99]
*/
//π§π»βπ» SOL-1
const fruits = ["Banana", "Orange", "Apple"];
const fruitsSorted = fruits.sort();
// console.log(fruitsSorted); // [ 'Apple', 'Banana', 'Orange' ]

//π§π»βπ» SOL-2
const arr1 = [1, 30, 4, 21, 100000, 99];

const sorted1Arr1 = arr1.sort();
// console.log(sorted1Arr1); // [ 1, 100000, 21, 30, 4, 99 ]

const sorted2Arr1 = arr1.sort((a, b) => a - b);
// console.log(sorted2Arr1); //

// console.log(arr1); // original array got mutated

// π₯33) ππ»ββοΈ Challenge Time:
/*
const months = ["Jan", "march", "April", "June", "July"]
1: Add Dec at the end of an Array?
2: What is the return value of splice method?
3: update march to March (update) ?
4: Delete June from an array ?
*/

const monthList = ["Jan", "march", "April", "June", "July"];

//π§π»βπ» Sol-1
// monthList.push("Dec");
// const newMonth = monthList.splice(5, 0, "Dec");
// const newMonth = monthList.splice(monthList.length, 0, "Dec");
// console.log(monthList); // [ 'Jan', 'march', 'April', 'June', 'July', 'Dec' ]

//π§π»βπ» Sol-2
// const spliceMonth = monthList.splice(1, 3);
// console.log(spliceMonth); // [ 'march', 'April', 'June' ] // removed 3 elements from index 1
// console.log(monthList); // [ 'Jan', 'July', 'Dec' ]

//π§π»βπ» Sol-3
// const updateMarch = monthList.splice(1, 1, "March");
// console.log(monthList); // [ 'Jan', 'March', 'April', 'June', 'July' ]

// const indexMarch = monthList.indexOf("march");
// if (indexMarch != -1) {
//   const updateMarch = monthList.splice(indexMarch, 1, "March");
// } else {
//   console.log("No such data find");
// }
// console.log(monthList); // [ 'Jan', 'March', 'April', 'June', 'July' ]

//π§π»βπ» Sol-4
// const indexJune = monthList.indexOf("June");
// console.log(indexJune); // 3
// console.log(monthList.splice(indexJune, 1)); // [ 'June' ]
// console.log(monthList); // [ 'Jan', 'march', 'April', 'July' ]

// π₯34) ππ»ββοΈ Challenge Time:
/*
βοΈπ€― 1- Find the square root of each element in an array.
        let arr = [25, 36, 49, 64, 81]
βοΈπ€― 2- Multiply each element by 2 and return only those elements which are greater than 10?
        let arr = [2,3,4,6,8]
*/
//π§π»βπ»SOl-1
let arrSqrt = [25, 36, 49, 64, 81];
const sqrtedArr = arrSqrt.map((num) => Math.sqrt(num));
// console.log(sqrtedArr); // [ 5, 6, 7, 8, 9 ]

//π§π»βπ»SOl-2
let arrMult = [2, 3, 4, 6, 8];

// const multedArr = arrMult.map((num) => num * 2);
// console.log(multedArr); // [ 4, 6, 8, 12, 16 ]

// const filteredMultedArr = multedArr.filter((num) => num > 10);
// console.log(filteredMultedArr); // [ 12, 16 ]

const multFiltArr = arrMult.map((num) => num * 2).filter((num) => num > 10);
// console.log(multFiltArr);

// π₯35) How to flattten an array
/*Converting 2d and 3d array into one Dimensional array
  const arr = [
                ["zone-1", "Zone-2"],
                ["Zone-3", "Zone-4"], 
                ["Zone-5", "Zone-6"], 
                ["Zone-7", "Zone-8"]
              ]
*/
const arr_2d = [
  ["zone-1", "Zone-2"],
  ["Zone-3", "Zone-4"],
  ["Zone-5", "Zone-6"],
  ["Zone-7", "Zone-8"],
];

let flattenArr = arr_2d.reduce((accum, currVal) => {
  return accum.concat(currVal);
});
// console.log(flattenArr);
