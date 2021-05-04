function removeDuplicates(nums: number[]) {
  return nums.forEach((num, index) => removeFrom(nums, num, index))
}

function removeFrom(array: number[], num: number, index: number) {
  array.splice(index, array.lastIndexOf(num) - index);
}
