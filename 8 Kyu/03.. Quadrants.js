/* 
Given a point in a Euclidean plane (x and y), return the quadrant the point exists in: 
1, 2, 3 or 4 (integer). x and y are non-zero integers, therefore the given point never lies on the axes.
----Examples-----
(1, 2)     => 1
(3, 5)     => 1
(-10, 100) => 2
(-1, -9)   => 3
(19, -56)  => 4 */



------- SOLUTION --------

function quadrant(x, y) {
  if (x > 0 && y > 0) return 1; // if both are positive return 1
  if (x < 0 && y > 0) return 2; // return 2 if x is negative and y is positive
  if (x < 0 && y < 0) return 3;	// return 3 if both are negative
  return 4;			// return 4 for everything else ie. when x is positive and y negative
}
