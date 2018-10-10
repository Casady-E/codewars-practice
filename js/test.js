/*
Even Or Odd
8kyu

Create a function (or write a script in Shell) that takes an integer as an argument
and returns "Even" for even numbers or "Odd" for odd numbers.
*/


function even_or_odd(number) {
if (typeof number === 'string') {
    return "Error";
  }else if(number % 2 === 0){
    return "Even";
  } else if (number % 2 != 0){
    return "Odd";
}
}

console.log(even_or_odd(2));
console.log(even_or_odd(0));
console.log(even_or_odd(7));
console.log(even_or_odd(1));
console.log(even_or_odd("poop"));
