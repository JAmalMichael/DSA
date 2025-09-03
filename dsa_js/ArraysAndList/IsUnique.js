/*Implement an algorithm to determine if a string has all unique characters. What if you 
cannot use additional data structures? */

//1.
//Using data structure
//using a function new set(a unique identifier) to compare with length of entire string

// IsUnique = (str) => {
//   return new Set(str).size == str.length;
// };

// console.log(IsUnique("bear"));

//2.
//Without a data stucture

function IsUniqueNoDsa(str) {
  let chars = str.split("").sort();
  for (let i = 1; i < chars.length; i++) {
    if (chars[i] === chars[i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(IsUniqueNoDsa("Bee"));
