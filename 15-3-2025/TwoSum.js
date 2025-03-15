// Find the pair of numbers that sum to the target.
// 1. Two Sum
/*
Step 1: Create Function
Step 2: Create Map
Step 3: Loop through the array
Step 4: Create the compliment i.e target - arr[i]
Step 5: Check if compliment is in the map or not using map.has()
Step 6: If it is in the map then return the index of compliment and current index.
Step 7: Else add the current element to the map with its index.
Tc: O(n)
Sc: O(n) 

*/
let arr = [1, 3, 4, 2, 5, 6, 8, 7];
let target = 10;

function findTwoSum(arr, target) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let compliment = target - arr[i];
    if (map.has(compliment)) {
      return [i, map.get(compliment)];
    } else {
      map.set(arr[i], i);
    }
  }
}
console.log(findTwoSum(arr, target));
