"use-strict"

function birthday(s, d, m) {
    // Write your code here
    // let prevInput = s[0];
    // for(let i = 1; i < s.length; i++) {
    //     const newOutput = prevInput + s[i];
    //     prevInput = [i];
    //     if(newOutput === d) {
    //         return 1
    //     } else return 0
    // }
    let disco = 0
    let count = [];

    for (let i = disco; i < s.length; i++) {
        let sum = s[0]
        // console.log(disco, i);
        if ((i + 1) === m) {
            // console.log(i, disco);
            if (s[i + 1]) {
                disco = i + 1
                sum = s[disco + 1]
            }
            return 1

        }
        for (let i = disco; i <= (disco + 7); i++) {
            sum + s[i + 1]
            
        }
        const checking = sum + s[i + 1]
        console.log('my sum', checking);
        if (checking === d) {
            count.push(true)
            // return count
        }

    }
    return count.length
}


console.log(birthday([2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1], 18, 7));

