// 1865. Finding Pairs With a Certain Sum
// https://leetcode.com/problems/finding-pairs-with-a-certain-sum/description/?envType=daily-question&envId=2025-07-06

public class FindSumPairs {

    private int[] nums1;
    private int[] nums2;

    public FindSumPairs(int[] nums1, int[] nums2) {
        this.nums1 = nums1;
        this.nums2 = nums2;
    }

    // add positive integer val to nums2[index]
    public void add(int index, int val) {
        if (index < 0 || index >= nums2.length) {
            throw new IllegalArgumentException("Index out of bounds");
        }
        
        if (val > 0) {
            nums2[index] += val;
        }
    }
    
    // nums1[i] + nums2[j] == tot
    // returns number of pairs that satisfy the condition
    public int count(int tot) {
        int count = 0;
        for (int i = 0; i < nums1.length; i++) {
            for (int j = 0; j < nums2.length; j++) {
                if (nums1[i] + nums2[j] == tot) {
                    count++;
                }
            }
        }
        return count;
    }
}
