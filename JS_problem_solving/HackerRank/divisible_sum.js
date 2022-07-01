function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let left = 0;
    let right = ar.length - 1;
    let result = 0;

    while (left < right) {

        const sum = ar[left] + ar[right];
        if (sum % k === 0) {
            result++
            right--
        } else if (left === (right - 1)) {
            left++
            // console.log('one');
            right = ar.length - 1;
        } else {
            right--
        }
        console.log(left, right);
    }
    return result;

}
console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));