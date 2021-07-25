/**
 * You are given an array points where points[i] = [xi, yi] is the coordinates of the ith point on a 2D plane. Multiple points can have the same coordinates.

You are also given an array queries where queries[j] = [xj, yj, rj] describes a circle centered at (xj, yj) with a radius of rj.

For each query queries[j], compute the number of points inside the jth circle. Points on the border of the circle are considered inside.

Return an array answer, where answer[j] is the answer to the jth query.
 * 
  * Example 1: 
  * Input: points = [[1,3],[3,3],[5,3],[2,2]], queries = [[2,3,1],[4,3,1],[1,1,2]]
Output: [3,2,2]
Explanation: The points and circles are shown above.
queries[0] is the green circle, queries[1] is the red circle, and queries[2] is the blue circle.
 * 
Contstraints:
1 <= points.length <= 500
points[i].length == 2
0 <= x​​​​​​i, y​​​​​​i <= 500
1 <= queries.length <= 500
queries[j].length == 3
0 <= xj, yj <= 500
1 <= rj <= 500
All coordinates are integers.
 **/

/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
 var countPoints = function(points, queries) {
    var hash = {};
    for (var i = 0; i < points.length; i++) { 
        hash[points[i][0] + ',' + points[i][1]] = true;
    } 
    var res = [];
    for (var i = 0; i < queries.length; i++) {
        var x = queries[i][0];
        var y = queries[i][1];
        var r = queries[i][2];
        var count = 0;
        for (var key in hash) {
            var x1 = parseInt(key.split(',')[0]);
            var y1 = parseInt(key.split(',')[1]);
            var dist = Math.sqrt(Math.pow(x1 - x, 2) + Math.pow(y1 - y, 2));
            if (dist <= r) {
                count++;
            }
        }
        res.push(count);
    }
    return res;
    
  
};