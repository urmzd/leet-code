function removeDuplicates(nums) {
    return nums.forEach((num, index) => removeFrom(nums, num, index));
}
function removeFrom(array, num, index) {
    array.splice(index, array.lastIndexOf(num) - index);
}
