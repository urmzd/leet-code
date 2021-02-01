/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  nums.forEach((num, index) => {
    nums.splice(index, nums.lastIndexOf(num) - index);
  })
  return nums.length
}

console.log(removeDuplicates([1, 1, 1, 1]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
