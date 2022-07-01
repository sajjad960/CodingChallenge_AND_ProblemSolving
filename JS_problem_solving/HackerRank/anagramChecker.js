function validAnagram(string1, string2) {

    let storeAllSingleString1 = {};
    let storeAllSingleString2 = {};

    for (let singleString of string1) {
        storeAllSingleString1[singleString] = ++storeAllSingleString1[singleString] || 1;
    }
    for (let singleString of string2) {
        storeAllSingleString2[singleString] = ++storeAllSingleString2[singleString] || 1;
    }
    // console.log(storeAllSingleString1, storeAllSingleString2);

    // if any false findout increase it
    let falseCounter = 0;

    for (let key in storeAllSingleString1) {
        if (!(storeAllSingleString1[key] === storeAllSingleString2[key])) {
            falseCounter++;
        }
    }
    // console.log(falseCounter);
    if (falseCounter > 0) {
        return false
    } else {
        return true;
    }

}


console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('awesome', 'awesom'));
console.log(validAnagram('qwerty', 'qeywrt'));
console.log(validAnagram('texttwisttime', 'timewisttext'));