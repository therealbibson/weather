/*
const balance = 5000

if (balance > 0) {
    console.log("baba mi money dey your hand oo")
};

*/


const bal = 2000;


if (bal > 4000) {
    console.log("oga go buy")
} else {
    console.log("oga move")
}





// if else

/*
const aza = 3000

if (aza > 4000) {
    console.log("odogwu you are rich")
} else {
    console.log(
        "bro you are broke"
    )
}
*/
// another example is

/*
const login = false

if (login) {
    console.log("you have succesfully logged in ")
}
else {
    console.log("oga go login ")
}
    */


//else if

/*

const report = 90

if (report >= 75) {
    console.log("excellent")
} else if (report >= 69) {
    console.log("good")
} else if (report >= 50) {
    console.log("not bad")
}

*/



const repo = 20





if (repo >= 75) {
    console.log("excellent")
} else if (repo >= 69) {
    console.log("very good")
} else if (repo >= 59) {
    console.log("good")
} else if (repo >= 50) {
    console.log("not bad")
} else if (repo <= 49) {
    console.log("you no sabi book")
}



















//logical operators
// and && -- 0r  ||



const correctPin = false;
const hasBalance = false;

if (correctPin || hasBalance) {
    console.log("login successful. but you dont have cash!");
} else {
    console.log("Access denied: Check your PIN or balance.");
}




//! not operators



if (!correctPin) {
    console.log("Transaction successful. Take your cash!");
} else {
    console.log("Access denied: Check your PIN or balance.");
}
