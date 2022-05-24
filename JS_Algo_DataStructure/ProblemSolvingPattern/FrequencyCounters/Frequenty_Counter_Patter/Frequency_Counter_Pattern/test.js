function validAnagram(string1, string2) {

    let storeAllSingleString1 = {};
    let storeAllSingleString2 = {};

    for (let singleString of string1) {
        storeAllSingleString1[singleString] = ++storeAllSingleString1[singleString] || 1;
    }
    for (let singleString of string2) {
        storeAllSingleString2[singleString] = ++storeAllSingleString2[singleString] || 1;
    }
    console.log(storeAllSingleString1, storeAllSingleString2);
}

validAnagram('anagram', 'nagaram')