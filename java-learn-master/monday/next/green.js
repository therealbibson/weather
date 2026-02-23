/*******************************************************
 * JAVASCRIPT ARRAY METHODS – FULL BEGINNER GUIDE
 * Author: You
 * Purpose: Teach arrays by SEEING results in console
 *******************************************************/

/*
WHAT IS AN ARRAY?
An array is a list that stores multiple values in ONE variable.
Each value has a position called an INDEX.
Indexes start from 0 (not 1).
*/

const fruits = ["Apple", "Banana", "Orange", "Mango"];

console.log("Initial Array:", fruits);

/* ===============================
   1. LENGTH – size of the array
================================= */
console.log("Array length:", fruits.length);

/* ===============================
   2. PUSH – add item to the END
================================= */
fruits.push("Pineapple");
console.log("After push:", fruits);

/* ===============================
   3. POP – remove item from END
================================= */
fruits.pop();
console.log("After pop:", fruits);

/* ===============================
   4. UNSHIFT – add item to START
================================= */
fruits.unshift("Strawberry");
console.log("After unshift:", fruits);

/* ===============================
   5. SHIFT – remove item from START
================================= */
fruits.shift();
console.log("After shift:", fruits);

/* ===============================
   6. INDEXING – access specific item
================================= */
console.log("First fruit:", fruits[0]);
console.log("Second fruit:", fruits[1]);

/* ===============================
   7. SLICE – copy part of array
   Does NOT change original array
================================= */
const slicedFruits = fruits.slice(1, 3);
console.log("Sliced array:", slicedFruits);
console.log("Original array after slice:", fruits);

/* ===============================
   8. SPLICE – remove or add items
   DOES change original array
================================= */
// Remove 1 item from index 1
fruits.splice(1, 1);
console.log("After splice (remove):", fruits);

// Add item at index 1
fruits.splice(1, 0, "Kiwi");
console.log("After splice (add):", fruits);

/* ===============================
   9. CONCAT – merge arrays
================================= */
const moreFruits = ["Guava", "Pear"];
const allFruits = fruits.concat(moreFruits);
console.log("After concat:", allFruits);

/* ===============================
   10. INCLUDES – check if value exists
================================= */
console.log("Has Mango?", fruits.includes("Mango"));
console.log("Has Watermelon?", fruits.includes("Watermelon"));

/* ===============================
   11. INDEXOF – find position
================================= */
console.log("Index of Mango:", fruits.indexOf("Mango"));
console.log("Index of Watermelon:", fruits.indexOf("Watermelon")); // -1 means NOT FOUND

/* ===============================
   12. JOIN – convert array to string
================================= */
const joinedFruits = fruits.join(" - ");
console.log("Joined string:", joinedFruits);

/* ===============================
   13. REVERSE – reverse array order
================================= */
fruits.reverse();
console.log("After reverse:", fruits);

/* ===============================
   14. SORT – arrange alphabetically
================================= */
fruits.sort();
console.log("After sort:", fruits);

/* ===============================
   15. FOREACH – loop through array
   Used when you want to DO something
================================= */
fruits.forEach(function (fruit, index) {
   console.log(`Fruit at index ${index}: ${fruit}`);
});

/* ===============================
   16. MAP – transform array
   Returns a NEW array
================================= */
const upperFruits = fruits.map(function (fruit) {
   return fruit.toUpperCase();
});
console.log("Mapped array (uppercase):", upperFruits);

/* ===============================
   17. FILTER – select items based on condition
================================= */
const longNamedFruits = fruits.filter(function (fruit) {
   return fruit.length > 5;
});
console.log("Filtered fruits (length > 5):", longNamedFruits);

/* ===============================
   18. FIND – get FIRST match
================================= */
/*const foundFruit = fruits.find(function (fruit) {
  return fruit.startsWith("M");
});
console.log("First fruit starti


?  */
