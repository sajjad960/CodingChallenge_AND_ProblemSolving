function countUniqueValue(array) {
    // let left = 0;
    // let right = array.length - 1;
    // while () {

    // }
    let i = 0;
    for (let j = 0; j < array.length; j++) {
        if (array[i] !== array[j]) {
            i++;
            array[i] = array[j]
        }
    }
    return i;
}

console.log(countUniqueValue([1, 1, 1, 1, 1, , 2]));
// array need to short first