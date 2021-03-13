function moveZeroes(nums: number[]): void {
  const numsLength = nums.length;

  for (let i = numsLength - 1; i >= 0; i--) {
    if (!nums[i]) {
      const replaceWith = nums.splice(i, 1)[0];
      nums.push(replaceWith)
    }
  }
}
