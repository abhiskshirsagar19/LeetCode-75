// Find the minimum element from the sorted rotated array.
// 153. Find Minimum in Rotated Sorted Array
/*
Step 1: Create Function
Step 2: Create left and right pointer
Step 3: Loop through the array
Step 4: Find the mid element
Step 5: Check if the right element is less than the mid element
Step 6: If it is then move the left pointer to mid + 1
Step 7: Else move the right pointer to mid
Step 8: Return the left element

Tc: O(logn)
Sc: O(1)
*/
let arr = [7, 8, 9, 10, 1, 2, 3, 4, 5, 6];

function findMinimum(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[right] < arr[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return arr[left];
}

console.log(findMinimum(arr));
