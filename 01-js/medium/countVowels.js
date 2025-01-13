/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  let count = 0;
  // const vowels = ['a' = 0, 'e' = 0, 'i' = 0, 'o' = 0, 'u' = 0];
  const vowels = ['a', 'i', 'o', 'e', 'u'];

  str.toLowerCase().split('').forEach((ele) => {
    if (vowels.includes(ele)) {
      count++;
    }
  })

  return count;
}

module.exports = countVowels;