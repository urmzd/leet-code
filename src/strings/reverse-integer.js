export function reverse(x) {
    if (!x)
        return x;
    const absResult = Math.abs(x).toString().split('').reverse().join('');
    const result = +(x > 0 ? absResult : '-' + absResult);
    if (result > 2 ** 31 || result < -(2 ** 31 - 1)) {
        return 0;
    }
    return result;
}
console.log(reverse(1));
console.log(reverse(-1));
console.log(reverse(-2147483412));
console.log(reverse(1534236469));
