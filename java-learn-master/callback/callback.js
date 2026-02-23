// ===============================
// CALLBACK FUNCTION BASICS
// ===============================

// STEP 1: A normal function
function showMessage(message) {
    document.getElementById("output").textContent = message;
}


const ade = document.getElementById(ade)




//This declares a function named showMessage.
//showMessage is the function name
//message is a parameter
//The function does nothing yet

// STEP 2: A function that ACCEPTS another function
function handleAction(callback) {
    console.log("handleAction started");

    // callback is NOT executed automatically
    // we decide WHEN to run it
    callback("Button was clicked!");

    console.log("handleAction finished");
}

// STEP 3: Select button from DOM
const button = document.getElementById("btn");

// STEP 4: Event listener uses a CALLBACK
button.addEventListener("click", function () {
    console.log("Button click detected");

    // Passing showMessage as a callback
    handleAction(showMessage);
});
