const rotate = (nums: number[], k: number): void => {
  k %= nums.length

  reverse(nums);
  reverse(nums, undefined, k);
  reverse(nums, k);

  console.log(nums);
}

const reverse = (nums: number[], start: number = 0, end: number = nums.length) : void => {
  for (let i = 0; i < Math.floor((end - start)/ 2); i++) {

    const first = start + i;
    const last = end - i - 1;

    [nums[first], nums[last]] = [nums[last], nums[first]];
  }
}

rotate([1,2], 3)
rotate([1,2,3,4,5,6,7], 3)
