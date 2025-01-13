/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let maxnum = numbers[0];
    numbers.forEach(element => {
        maxnum = Math.max(maxnum, element)
    });
    return maxnum;
}

module.exports = findLargestElement;