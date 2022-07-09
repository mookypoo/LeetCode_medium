// https://leetcode.com/problems/container-with-most-water/

const maxArea = function(height){
    var list = [];
    for (var a of height){
        var b = a + 1;
        for (var b of height) {
            var area = (b - a) * (height[b] > height[a] ? height[a] : height[b]);
            list.push(area);
        }
    }
    list.sort((a, b) => b-a);
    console.log(list);
    return list[0];
}

