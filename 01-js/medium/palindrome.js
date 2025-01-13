/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let result = '';
  for (const char of str) {
    const code = char.charCodeAt(0); // Get ASCII code of the character
    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) { // Check if the character is a letter
      result += char;
    }
  }
  str = result;
  str = str.toLowerCase().split('');

  for (let i = 0; i < str.length; i++) {
    if (str[i] != str[str.length - i - 1]) return false;
  }
  return true;
}

module.exports = isPalindrome;
