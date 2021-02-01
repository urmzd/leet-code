function containsDuplicate(nums: number[]) {
  return new Set(nums).size != nums.length;
}
