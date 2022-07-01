//challenge 3
const { deepStrictEqual } = require('assert');

const wordCounter = (line) => {
    // implement me!
    let wantedObj = {}
    const allStringArray =  line.split(' ');
    const allCountedArray = []

    //count string start
    allStringArray.forEach(singleStringElement => {

      let count = 0;
      allStringArray.map((stringOfArray) => {
        if(stringOfArray === singleStringElement) {
          count = count + 1;
        }
      })
      allCountedArray.push(count)

    });
    //count string end

    wantedObj = Object.assign(...allStringArray.map((string, i) => ({[string]: allCountedArray[i]})))
    return wantedObj
}

const input = 'This is some random text and some raddom work';

const want = {
  This: 1,
  is: 1,
  some: 2,
  random: 1,
  text: 1,
  and: 1,
  raddom: 1,
  work: 1,
};

deepStrictEqual(wordCounter(input), want, 'mutable approach failed');

console.log('test passed');

