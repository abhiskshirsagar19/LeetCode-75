// 217. Contains Duplicate
/*
Step 1: Create Function
Step 2: Create a set
Step 3: return the set size is not equal to the array length
*/
let arr = [1, 2, 3, 4, 5];

function duplicates(arr) {
  const set = new Set(arr);

  return set.size !== arr.length;
}

console.log(duplicates(arr));
