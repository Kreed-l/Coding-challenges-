/*
You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0. */

_____________________________
--------- SOLUTION ----------

const positiveSum = arr => {
  return arr.filter(ele => ele > 0)   	// filters out negative numbers
         .reduce((acc,c) => acc + c, 0)	// sum of new filtered array
}
