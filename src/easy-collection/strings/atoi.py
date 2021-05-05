class Solution:
    def myAtoi(self, s: str) -> int:
        __s = ''
        sign = ''

        for _s in s:
            if not __s and not sign:
                if _s == "+" or _s == "-":
                    if sign: 
                        return 0;
                    sign = _s;
                    continue;

                if _s == " ":
                    continue;

            if _s.isnumeric():
                __s += _s;
            else: 
                break;

        if __s:
            r = int(__s) if not sign else int(sign + __s);

            if r < -(2**31):
                return -(2**31);

            if r > 2**31-1:
                return 2**31-1;

            return r;

        return 0;

sol = Solution()
print(sol.myAtoi("0     -42"))


