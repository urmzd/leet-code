function intersect(nums1, nums2) {
    let n1 = nums1;
    let n2 = nums2;
    if (nums1.length < nums2.length) {
        n1 = nums2;
        n2 = nums1;
    }
    const dups = {};
    n1.forEach(v => dups[v] = (dups[v] ?? 0) + 1);
    return n2.filter(v => {
        const exists = dups[v] && dups[v] > 0;
        dups[v] = dups[v] - 1;
        return exists;
    });
}
