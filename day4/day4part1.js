const fs = require('fs');

const validatePassport = async () => {
    const text = fs.readFileSync("./input.txt", "utf-8");
    const lines = text.split("\n\n");
    let j = 0;
    let counter = 0;
    console.log(lines[0].split(' '));
    let lineArr = [];
    lines.map(line => {
        lineArr = line.split(/\s/);
        console.log(lineArr);
        let passportObj = {};
        lineArr.map(entry => {
            let key = entry.split(':')[0];
            let val = entry.split(':')[1];
            passportObj[key] = val;
        });
        if (Object.keys(passportObj).length == 8 || (Object.keys(passportObj).length == 7 && !Object.keys(passportObj).includes('cid'))) counter++;
    });

    return counter;
}

validatePassport().then(console.log);