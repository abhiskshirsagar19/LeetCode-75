// Best time to buy or sell stock with maximum profit;
// 121. Best Time to Buy and Sell Stock
/*
Step 1: Create Function
Step 2: Create variable to store the minimum and maximum value
Step 3: Loop through the array
Step 4: Using Math.min() find the minimum value and Math.max() find the maximum value
Step 5: Calculate the profit by subtracting the minimum value from the maximum value;

Tc= O(n)
Sc= O(1)
*/
let prices = [7, 1, 5, 3, 4, 6, 2];
function findProfit(prices) {
  let cMin = prices[0];
  let cMax = 0;
  for (let i = 0; i < prices.length; i++) {
    // cMin = Math.min(cMin, prices[i]);
    // cMax = Math.max(cMax, prices[i] - cMin);

    if (prices[i] < cMin) {
      cMin = prices[i];
    }
    let profit = prices[i] - cMin;
    if (profit > cMax) {
      cMax = profit;
    }
  }
  return cMax;
}

console.log(findProfit(prices));
