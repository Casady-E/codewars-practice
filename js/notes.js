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

//Submitted Answer
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


//Best Practice Answer
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

function XO (str) {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}


/*
A Needle in the Haystack
8kyu

Can you find the needle in the haystack?
Write a function findNeedle() that takes an array full of junk but containing one "needle"
After your function finds the needle it should return a message (as a string) that says:
"found the needle at position " plus the index it found the needle, so: "found the
needle at position 5"
*/

function findNeedle(haystack) {
  let needlePosition = haystack.indexOf("needle");
  return "found the needle at position " + needlePosition;
}

var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
var haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
var haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];

console.log(findNeedle(haystack_1));
console.log(findNeedle(haystack_2));
console.log(findNeedle(haystack_3));

//BEST PRACTICE Answer
function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}


/*
Basic Mathematical Operations
8kyu

Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.


*/


function basicOp(operation, value1, value2)
{
  switch(operation){
    case "*":
    return value1 * value2;
    break;
    case "+":
    return value1 + value2;
    break;
    case "-":
    return value1 - value2;
    break;
    case "/":
    return value1 / value2;
    break;
    default:
    return "Oops";
  }
}

console.log("Basic tests\n");
console.log(basicOp('+', 4, 7)); //11
console.log(basicOp('-', 15, 18)); //-3
console.log(basicOp('*', 5, 5)); //25
console.log(basicOp('/', 49, 7)); //7
