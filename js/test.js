/*
Exes and Ohs
7kyu
Check to see if a string has the same amount of 'x's and 'o's. The method must return
a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/


function XO(str) {
//check for o and place into array, find length of array
  let oCount = [...str].filter(l => l === 'o').length;
//check for O and place into array, find length of array
  let oCapCount = [...str].filter(l => l === 'O').length;
//check for x and place into array, find length of array
  let xCount = [...str].filter(l => l === 'x').length;
//check for X and place into array, find length of array
  let xCapCount = [...str].filter(l => l === 'X').length;
//add together letter count variables and check for equality
  if (oCount + oCapCount === xCount + xCapCount){
    return true;
  } else if (oCount + oCapCount != xCount + xCapCount){
    return false
  }
}
console.log(XO("ooxx"))
console.log(XO("xooxx"))
console.log(XO("ooxXm"))
console.log(XO("zpzpzpp"))
console.log(XO("zzoo"))
