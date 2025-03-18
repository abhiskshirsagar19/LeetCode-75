//53. Maximum Subarray
/*
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
*/
let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function maxSubArray(arr) {
  let curMax = arr[0];
  let maxima = arr[0];

  for (let i = 1; i < arr.length; i++) {
    // curMax = Math.max(arr[i], curMax + arr[i]);
    // maxima = Math.max(maxima, curMax);
    if (arr[i] > curMax + arr[i]) {
      curMax = arr[i];
    } else {
      curMax = curMax + arr[i];
    }
    if (curMax > maxima) {
      maxima = curMax;
    }
  }
  return maxima;
}
console.log(maxSubArray(arr));
