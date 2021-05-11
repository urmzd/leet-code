from typing import List


class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if not strs:
            return "";

        s = strs[0]

        for i in range(1, len(strs)):
            if s == "":
                return s;

            l = strs[i]

            if len(s) > len(l):
                s, l = l, s

            j = 0

            while j < len(s) and s[j] == l[j]:
                j+= 1

            s = s[:j]
            if (j == 0):
                return s

        return f'{s}';

sol = Solution()
print(sol.longestCommonPrefix(["flow", "flowers", "flight"]))
