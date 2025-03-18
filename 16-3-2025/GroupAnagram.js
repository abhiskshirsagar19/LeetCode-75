// 49 Group Anagram
/*
Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
*/

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

function groupedAnagram(strs) {
  let sorted = strs.map((str) => str.split("").sort().join(""));
  //   console.log(sorted);
  let map = {};
  for (let i = 0; i < sorted.length; i++) {
    if (!map[sorted[i]]) {
      map[sorted[i]] = [strs[i]];
    } else {
      map[sorted[i]].push(strs[i]);
    }
  }
  return Object.values(map);
}

console.log(groupedAnagram(strs));
