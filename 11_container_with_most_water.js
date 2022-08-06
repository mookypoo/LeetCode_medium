// https://leetcode.com/problems/container-with-most-water/

// brute force 95ms
const maxArea = function(height){
    var list = [];
    for (var a in height){
        var b = a + 1;
        for (var b in height) {
            var area = (b - a) * (height[b] > height[a] ? height[a] : height[b]);
            list.push(area);
        }
    }
    list.sort((a, b) => b-a);
    console.log(list);
    return list[0];
}

// sliding window? 63ms
var maxArea = function(heightList) {
    var left = 0;
    var right = heightList.length - 1;
    var maxArea = 0;
    
    while (left < right) {
        var height = Math.min(heightList[left], heightList[right]);
        var width = right - left;
        var area = height * width;
        if (area > maxArea) maxArea = area;
        
        if (heightList[left] <= heightList[right]){
            left++;
        } else {
            right--;
        }

    }
    
    return maxArea;
};
