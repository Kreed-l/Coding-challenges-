// The first century spans from the year 1 up to and including the year 100, 
// the second century - from the year 101 up to and including the year 200, etc.
// -----Task-----
// Given a year, return the century it is in.
// -----Examples ----
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// 2742 --> 28     


/////////// solution /////////////////

//  each century has 99 years, 1900 is 19th cen and one day more is 20th century,
// if we divide by 100 we can remove 2 digits from the end. 

// The we will round it as we only need 2 digits, 2 methods are .ceil and .floor.
// We cannot use floor, cause for example 1901 is gonna be 19.01, which is 20th cen
// if we round down it will be 19th thus its better to round up.

function century(year) {
    // Calculate the century by dividing the year by 100 and rounding up
    return Math.ceil(year / 100);
}