class Solution:
    def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:
        fast = slow = head

        for _ in range(n):
            fast = fast.next

        if not fast:
            return head.next;

        while fast.next:
            fast, slow = fast.next, slow.next

        return head



