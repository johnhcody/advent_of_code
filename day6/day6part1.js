const fs = require('fs');

const countYes = async () => {
    const text = fs.readFileSync("./input.txt", "utf-8");
    const lines = text.split("\n\n");
    let counter = 0;
    lines.map(line => {
        
        lineArr = line.split(/\s/);
        let combinedStr = lineArr.join(',');
        let answerObj = {};
        for (let i = 0; i < combinedStr.length; i++) {
            answerObj[combinedStr[i]] = true;
        }
        delete answerObj[',']
        counter += Object.keys(answerObj).length;

    });
    return counter;
}

countYes().then(console.log);