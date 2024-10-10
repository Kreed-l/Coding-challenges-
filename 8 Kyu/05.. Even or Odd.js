/* Create a function that takes an integer as an argument and 
returns "Even" for even numbers or "Odd" for odd numbers. */


////////////// SOLUTION ////////////////// 
function evenOrOdd(number) {
    return number % 2 === 0 ? "Even" : "Odd";   // if there is no reminder when number is divided by 2, then return "Even" if not "Odd"
}

[[[OR]]]

const evenOrOdd = number => number % 2 === 0 ? "Even" : "Odd";   //Shorter version of the code
