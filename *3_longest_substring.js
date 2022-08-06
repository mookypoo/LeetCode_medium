// https://leetcode.com/problems/longest-substring-without-repeating-characters/

// using Set object 
const lengthOfLongestSubstring = function(s) {
    var list = [];
    for (var i = 0; i < s.length; i++){
        for (var a = i+1; a < s.length; a++){
            var sub = s.substring(i, a);
            var set = new Set(sub);
            if (set.size === sub.length) list.push(set.size);
        }
    }
    return list.sort((a, b) => b-a)[0];
};
// 68 seconds 

lengthOfLongestSubstring("pwwkew"); // 3
lengthOfLongestSubstring("bbb"); // 1
lengthOfLongestSubstring("abcabcbb"); // 3

// sliding window 
