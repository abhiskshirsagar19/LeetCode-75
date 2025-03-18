// 238. Product of Array Except Self
let arr = [1, 2, 3, 4];

function productArray(arr) {
  let res = [];
  let start = 1;
  for (let i = 0; i < arr.length; i++) {
    res.push(start);
    start = start * arr[i];
  }

  let start2 = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    res[i] = start2 * res[i];
    start2 = start2 * arr[i];
  }
  return res;
}
console.log(productArray(arr));
// This solution takes the extra space.
// function productArray(arr) {
//     let forward = [];
//     let start = 1;
//     for (let i = 0; i < arr.length; i++) {
//       forward.push(start);
//       start = start * arr[i];
//     }
//     //   return forward;
//     let res = [];
//     let start2 = 1;
//     for (let i = arr.length - 1; i >= 0; i--) {
//       res.unshift(start2 * forward[i]);
//       start2 = start2 * arr[i];
//     }
//     return res;
//   }

//   console.log(productArray(arr));
