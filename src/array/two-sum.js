function twoSum(nums, target) {
    const dict = {};
    let result = [];
    nums.some((v, i) => {
        if (dict.hasOwnProperty(target - v)) {
            result = [dict[target - v], i];
            return true;
        }
        dict[v] = i;
        return false;
    });
    return result;
}
console.log(twoSum([3, 6, 3], 6));
