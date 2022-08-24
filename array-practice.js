const findMinimum = arr => {
  if (arr.length == 0) return undefined;
  // Math.min method: O(n)
  return Math.min(...arr);
};

const runningSum = arr => {
  let sum = 0;
  let sums = [];
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    sums.push(sum);
  }
  return sums;
};

const evenNumOfChars = arr => {
  // assigning a variable to a number data type: O(1)
  let count = 0;
  // Array.prototype.forEach(): O(n)
  arr.forEach(el => el.length % 2 === 0 ? count++ : null);
  return count;
};

const smallerThanCurr = arr => {
  // constructing an empty array: O(1)
  let newArray = [];
  // for loop: O(n)
  for (let i = 0; i < arr.length; i++) {
    // assigning a variable to a number data type: O(1)
    let count = 0;
    // Array.prototype.forEach(): O(n)
    arr.forEach(el => el < arr[i] ? count++ : null);
    // Array.prototype.push(): O(n)
    newArray.push(count);
  }
  // complexity is O(n^2): as it goes through the array (n), it iterates through the array for every element (n)
  return newArray;
};

const twoSum = (arr, target) => {
  // nesting Array.prototype.some() in Array.prototype.some(): O(n^2)
  return arr.some((x, i) => {
    return arr.some((el, j = i + 1) => {
      return arr[i] + arr[j] === target;
    });
  });
};

const secondLargest = arr => {
  if (arr.length <= 1) return undefined;
  arr.splice(arr.indexOf(Math.max(...arr)), 1);
  return Math.max(...arr);
};

const shuffle = (arr) => {
  if (arr.length == 0) return null; 
  let newArray = arr.slice();
  let currentIndex = newArray.length, randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [newArray[currentIndex], newArray[randomIndex]] = [
        newArray[randomIndex], newArray[currentIndex]];
    }

    return newArray;
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];