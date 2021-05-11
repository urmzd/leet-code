function firstUniqChar(s: string): number {
  if (s.length === 1) {
    return 0;
  }

  let charsCount: {[key: string]: number} = {}

  s.split("").forEach((val) => {
    if (val in charsCount) {
      charsCount[val] += 1; 
    } else {
      charsCount[val] = 1;
    }
  });

  for (const prop in charsCount) {
    if (charsCount[prop] === 1) {
      return s.indexOf(prop);
    } 
  }

  return -1;

}

console.log(firstUniqChar("aabb"))
console.log(firstUniqChar("loveleetcode"))
console.log(firstUniqChar("leetcode"))
