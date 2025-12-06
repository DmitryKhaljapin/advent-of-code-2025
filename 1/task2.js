const input = require('./input')
const parser = require('./parser')

const [list1, list2] = parser(input)

let total = 0;

for (let i = 0; i < list1.length; ++i) {
    let count = 0 ;
    for (let j = 0; j < list2.length; ++j) {
        if (list1[i] === list2[j]) ++count;
    }

    total += list1[i] * count;
    count = 0;
}

console.log(total)