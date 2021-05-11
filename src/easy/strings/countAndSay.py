from typing import Counter, Iterator

class Solution:
    def count(self, seq: str) -> Iterator[tuple[int, str]]:
        counter = []
        count = 1
        char = seq[0]

        for s in seq[1:]:
            if s != char:
                yield (count, char)
                count = 1;
                char = s;
                continue

            count += 1

        counter.append((count, char))
        yield (count, char)


    def countAndSay(self, n: int) -> str:
        r = "1"
        i = n - 1;

        while i:
            temp = ""
            for c in self.count(r):
                temp += f'{c[0]}{c[1]}'

            r = temp;
            i -= 1

        return r

sol = Solution();
print(sol.countAndSay(4))
