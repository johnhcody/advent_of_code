const fs = require("fs");

const twoSum = async() => {
    const text = fs.readFileSync("./input.txt", "utf-8");
    const lines = text.split("\n");
    const numbers = lines.map(Number);
    let hashObj = {}

    for (let i = 0; i < numbers.length; i++) {
        let thisNum = numbers[i];
        hashObj[thisNum] = i;
    }

    for (let i = 0; i < numbers.length; i++) {
        let difference = 2020 - numbers[i];
        if (hashObj.hasOwnProperty(difference)) {
            return difference * numbers[i]; 
        }
    }

    return 1;
}

twoSum().then(console.log);


// const solve = async() => {
//     const lines = await parseLines();
//     const numbers = lines.map(Number);
//     const numberSet = new Set();

//     for (let number of numbers) {
//         const difference = 2020 - number;
//         if (numberSet.has(difference)) {
//             return number * difference;
//         }
//         numberSet.add(number);
//     }
// }