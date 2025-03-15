//11. Container With Most Water
/*
Step 1 : Create Function
Step 2 : Create two pointers left and right
Step 3 : Create a variable to store the maximum value
Step 4 : Loop through the array
Step 5 : Calculate the width by subtracting the right from the left
Step 6 : Calculate the maxArea by multiplying the minimum value of the left and right with the width
Step 7 : Find the maximum value between the maxima and maxArea
Step 8 : If the left is less than the right increment the left else decrement the right
Step 9 : Return the maxima

Tc= O(n)
Sc= O(1)
*/
let height = [7, 19, 8, 5, 2, 14, 2, 5, 8, 19];

function mostWaterContainer(height) {
  let left = 0;
  let right = height.length - 1;
  let maxima = 0;
  while (left < right) {
    let width = right - left;
    let maxArea = Math.min(height[left], height[right]) * width;
    maxima = Math.max(maxima, maxArea);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxima;
}

console.log(mostWaterContainer(height));
