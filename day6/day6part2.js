const fs = require('fs');

const countAllYes = async () => {
    const text = fs.readFileSync("./input.txt", "utf-8");
    const lines = text.split("\n\n");
    let counter = 0;
    lines.map(line => {

        lineArr = line.split(/\s/);
        let combinedStr = lineArr.join(',');
        //console.log(lineArr.length);
        let answerObj = {};
        for (let i = 0; i < combinedStr.length; i++) {
            if (answerObj[combinedStr[i]]) {
                answerObj[combinedStr[i]].push(`${i}`)
            } else {
                answerObj[combinedStr[i]] = [`${i}`]
            }
            if (lineArr.length == answerObj[combinedStr[i]].length) counter += 1;
        }
        delete answerObj[',']


        //counter += Object.keys(answerObj).length;

    });
    return counter;
}

countAllYes().then(console.log);