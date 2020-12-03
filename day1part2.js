const fs = require("fs");

const threeSum = async () => {
    const text = fs.readFileSync("./input.txt", "utf-8");
    const lines = text.split("\n");
    const numbers = lines.map(Number);
    let hashObj = {}

    for (let i = 0; i < numbers.length - 2; i++) {
        for (let j = 1; j < numbers.length - 1; j++) {
            if (j > 1) {
                hashObj[numbers[i] + numbers[j]] = [numbers[i], numbers[j]];
            }
        }
    }

    for (let i = 0; i < numbers.length; i++) {
        let difference = 2020 - numbers[i];
        if (hashObj.hasOwnProperty(difference)) {
            twoSum = hashObj[difference];
            return numbers[i] * twoSum[0] * twoSum[1];
        }
    }
    return 1;
}

threeSum().then(console.log);
