class Solution:
    def isPalindrome(self, s: str) -> bool:
        _s = ''.join(map(lambda x: x.lower(), filter(lambda x: x.isalnum(), s)))
        return _s == _s[::-1]
