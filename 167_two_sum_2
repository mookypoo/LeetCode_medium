https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

const twoSum = (numbers, target) => {
   for (i in numbers) {
       const otherNumber = target - numbers[i];
       const otherIndex = numbers.indexOf(otherNumber);
       if (otherIndex != -1) {
           return [Number(i+1), otherIndex + 1];
       }
   }
};

console.log(twoSum([2,7,11,15], 9)); // [1,2]
console.log(twoSum([2,3,4], 6)); // [1, 3]
console.log(twoSum([-1,0], -1)); // [1, 2]
