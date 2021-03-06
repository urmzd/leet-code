function singleNumber(nums: number[]): number {
  let res = nums[0];

  if (nums.length > 1) {
    for (let i = 1; i < nums.length; i++) {
      res ^= nums[i];
    }
  }

  return res;
}
