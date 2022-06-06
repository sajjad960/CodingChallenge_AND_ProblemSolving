// make max sub array sum with BigO(n) without nsquare, Here they did it with changing the position
function maxSubArraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;

    if (num > arr.length) return null;

    // first loop for calculating 
    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }
    // change the first positon of sum and also last position
    tempSum = maxSum
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum)
    }
    console.log(maxSum);
    return maxSum;
}

maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)
maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)
maxSubArraySum([4, 2, 1, 6], 1)
maxSubArraySum([4, 2, 1, 6], 4)
maxSubArraySum([], 4)
