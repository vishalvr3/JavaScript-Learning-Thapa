/******************************************************************/
/************************* INTERVIEW QUESTIONS ********************/
/******************************************************************/

/*π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»*/
// πQuestion-1: Difference between null and undefined

/*
//THEORY
ποΈ null:
We assign it explicitly to any variable
ποΈ undefined: 
We assigned the variable but didn't assigned any value to it is undefined.
*/

var iAmUseless = null;
// console.log(iAmUseless); // null
// console.log(typeof iAmUseless); // object

var iAmStandBy;
// console.log(iAmStandBy); // undefined
// console.log(typeof iAmStandBy); // undefined

/*π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»*/
// πQuestion-2: What is NaN (Not a Number)
/*
//THEORY
ποΈ NaN is a property of the global object
ποΈ In other words, it is a variable in global scope.
ποΈ The initial value of NaN is Not-A-Number
*/

var userName = "vishalam";
var userNum = 36;

console.log(userName + userNum); // vishalam36
console.log(userName - userNum); //NaN
console.log(userName * userNum); //NaN
console.log(userName / userNum); //NaN
console.log(userName % userNum); //NaN

console.log(isNaN(userName)); //true
console.log(isNaN(userNum)); //false
console.log(isNaN(userName + userNum)); //true
console.log(isNaN(userName - userNum)); //true

/*π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»*/
// πQuestion-3: Difference betweeen == and ===
/*
//THEORY
ποΈ == : Value same (abstract equality)
ποΈ === : Value and Data type same (strict equality)
*/

console.log(2 == 2); //true
console.log(2 === 2); //true
console.log(2 == "2"); //true (abstract equality)
console.log(2 === "2"); //false (Strict equality, value is same but data type isn't)

/*π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»*/
// πQuestion-4: What is truthy and falsy values in JavaScript?
/*
//THEORY
    π Truthy Values: All values which aren't falsy is truthy.
                      ποΈ Goes to "If" part
                      β Boolean (true)
                      β Boolean ({})
                      β Boolean ([])
                      β Boolean (42)
                      β Boolean ("0")
                      β Boolean ("false")
                      β Boolean (new Date())
                      β Boolean (-42)
                      β Boolean (12n)
                      β Boolean (3.14)
                      β Boolean (-3.14)
                      β Boolean (Infinity)
                      β Boolean (-Infinity)

    π Falsy Values:
                      ποΈ Goes to "Else" part
                      β Boolean (false)
                      β Boolean (0)
                      β Boolean ("") //empty string
                      β Boolean (unefined)
                      β Boolean (null)
                      β Boolean (NaN)
                      β Boolean (0n)
*/

var val = 0; //falsy (so it will go to else part unless its score===0)

if (val) {
  console.log("You passed ππ₯");
} else {
  console.log("you failed π₯π£");
}

/*π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»*/
// πQuestion-6: Conditional (ternary) Operator:
/*
//THEORY
π It is a short-hand if else, which  is known as the "ternary operator", because it consists of #Three_Operands.
π¨π»βπ» variable = (condition) ? expressionTrue :  expressionFalse;
*/

/*π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»*/
/*
//THEORY
π Functions in JavaScript:
                          π¨π»βπ» Function Definition:
                                                π A JavaScript function is a block of code designed to perform a particular task. A JavaScript function is executed when "something" invokes it (calls it).
                                                π A block of code which we need to use again and again.
                          π¨π»βπ» Calling a Function:
                          π¨π»βπ» Function Parameter:
                                                π Placeholder
                          π¨π»βπ» Function Arguments:
                                                π Real values while calling function.
                          π¨π»βπ» Function Declaration:
                                                π normal written function is calkled a s "function declaration".
                          π¨π»βπ» Function Expressions:
                                                π Storing a function in a variable is "function expression".
                          π¨π»βπ» Return Keyword:
                          π¨π»βπ» Anonymous Function:
*/

/*π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»*/
/*
//THEORY
        Interview Question:
                        πQuestion: Why Functions?
                         We can reuse code: Define the code once , and use it many times.
                        π We can use the dame code many times with different arguments, to produce different results.

                        OR

                        π A function is a group of reusable code which can be called anywhere in our program. This eliminates the need of writing the same code again and again.
*/

/*π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»*/
/*
//THEORY
        Function Expressions:
                          π A function expression can be stored in a variable.
                          π After a function expression has been stored in a variable, the variable can be used as a function.
*/

/*π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»*/
/*
//THEORY
        Anonymous Expressions:
                          π Anonymous Function is a function that does not have any name associated with it.
*/

/*π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»π»*/
// π€― Difference betweeen Function exzpression and function declaration.
/*
//THEORY
π The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions.
πFunction expressions in JavaScript are not hoisted, unlike function declarations. You can't use function expressions before you create them:
        
*/

/*βοΈβοΈβοΈβοΈβοΈβοΈβοΈβοΈβοΈβοΈβοΈβοΈβοΈβοΈβοΈβοΈβοΈβοΈβοΈβοΈβοΈβοΈβοΈβοΈβοΈβοΈβοΈ*/
/******************************** METHODS LIST ***********************/
/*
π alert("Chaad sitare fool aur khushboo ye to saare purane hain.. Taaza taaza kali khili hai hum iske deewane hain...hmmmm hmmmm");

π console.log("Anddaz hain uske naye naye..hai naya naya deewanapan...")

π confirm("Pehna kar taaz javanni ka hans kar laut gaya bachpan...")

π console.log(typeof("hoo hoooooo"))

π console.log(isNaN(25)) //false
π console.log(isNaN("Mummy Ji π₯°")) //true

π console.log(Boolean("2")) //true
π console.log(Boolean(NaN) //false
πconsole.log(Boolean(undefined) //false

*/

/*βοΈβοΈβοΈβοΈβοΈβοΈβοΈβοΈβοΈβοΈβοΈβοΈβοΈβοΈβοΈβοΈβοΈβοΈβοΈβοΈβοΈβοΈβοΈβοΈβοΈβοΈβοΈ*/
