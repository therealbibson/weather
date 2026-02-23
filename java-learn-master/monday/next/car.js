/************************************************************
* JAVASCRIPT FUNCTIONS — BEGINNER FRIENDLY GUIDE
*
* A function is a block of code written to perform a task.
* You write it ONCE and use it MANY times.
*
* Why functions matter:
* - Avoid repetition
* - Make code reusable
* - Make code readable
* - Make logic flexible
************************************************************/


/************************************************************
* 1. FUNCTION DECLARATION
*
* This is the MOST COMMON and SAFEST type.
* JavaScript reads this function before running the code.
************************************************************/

function greet() {
    console.log("Hello! Welcome to JavaScript.");
}






function funky() {
    return a + b
}


// Calling (using) the function
greet();
greet();

/*
Key idea:
- The function is defined once
- We can call it many times
*/



/************************************************************
* 2. FUNCTION WITH PARAMETERS
*
* Parameters are PLACEHOLDERS.
* They allow the function to accept different values.
************************************************************/

function greetUser(name) {
    console.log("Hello " + name + "! green");
}

// Arguments are the REAL values passed in
greetUser("Emmanuel"); ``
greetUser("Sarah");
greetUser("John");

/*
Why parameters matter:
- Without parameters, function is fixed
- With parameters, function becomes flexible
*/



/************************************************************
* 3. FUNCTION THAT RETURNS A VALUE
*
* "return" sends data back to where the function was called.
************************************************************/

function addNumbers(a, b) {
    return a + b;
}

let sum1 = addNumbers(5, 3);
let sum2 = addNumbers(100, 250);

console.log("Sum 1:", sum1);
console.log("Sum 2:", sum2);

/*
Important:
- console.log shows values
- return gives values back for reuse
*/



/************************************************************
* 4. FUNCTION EXPRESSION
*
* A function stored inside a variable.
* NOT hoisted (must be defined before use).
************************************************************/

const multiply = function (x, y) {
    return x * y;
};

console.log("Multiply:", multiply(4, 5));



/************************************************************
* 5. ARROW FUNCTION (MODERN JAVASCRIPT)
*
* Shorter and cleaner syntax.
* Very popular in React and modern JS.
************************************************************/

const divide = (a, b) => {
    return a / b;
};

console.log("Divide:", divide(20, 4));


// Shorter arrow function (one-line return)
const square = number => number * number;

console.log("Square of 6:", square(6));



/************************************************************
* 6. DEFAULT PARAMETERS
*
* If no argument is passed, default value is used.
************************************************************/

function calculateTax(amount, taxRate = 0.1) {
    return amount * taxRate;
}

console.log("Tax on 5000:", calculateTax(5000));
console.log("Tax on 5000 (custom rate):", calculateTax(5000, 0.2));



/************************************************************
* 7. FUNCTION INSIDE A FUNCTION
*
* One function can use another function.
* This is how real applications are built.
************************************************************/

function formatCurrency(amount) {
    return "₦" + amount.toFixed(2);
}

function showPrice(price) {
    let formattedPrice = formatCurrency(price);
    console.log("The price is:", formattedPrice);
}

showPrice(15000);
showPrice(8999.5);



/************************************************************
* 8. CALLBACK FUNCTION
*
* A function passed into another function.
* Very important for async operations.
************************************************************/

function processUserInput(callback) {
    let name = "Emmanuel";
    callback(name);
}

processUserInput(function (name) {
    console.log("Welcome back,", name);
});



/************************************************************
* 9. IMMEDIATELY INVOKED FUNCTION (IIFE)
*
* Runs immediately after creation.
* Used to avoid polluting global scope.
************************************************************/

(function () {
    console.log("This function runs immediately!");
})();



/************************************************************
* 10. PURE FUNCTION
*
* - Same input → same output
* - No external changes
* - Predictable and safe
************************************************************/

function pureAdd(a, b) {
    return a + b;
}

console.log("Pure add:", pureAdd(2, 2));
console.log("Pure add again:", pureAdd(2, 2));



/************************************************************
* FINAL SUMMARY
*
* - Functions organize logic
* - Parameters make them flexible
* - return makes them useful
* - Arrow functions = modern JS
* - Callbacks = power of JS
************************************************************/

console.log("🎯 End of JavaScript Functions Guide");