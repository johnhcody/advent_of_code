const fs = require("fs");

const threeSum = async () => {
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

threeSum().then(console.log);
