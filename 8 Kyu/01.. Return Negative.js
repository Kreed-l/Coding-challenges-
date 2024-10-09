/*
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

---------Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12

Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense. */


/////////// Solution ///////////

function makeNegative(num) {
  if (num > 0)          // if number is less than 0 then it multiplies it with -1
    return num * -1
  else                  // If number is 0 or more than 0 then it return the number as it is
    return num

}
console.log(makeNegative(1))