const fs = require("fs");

const passwordValidator = async () => {
    const text = fs.readFileSync("./input.txt", "utf-8");
    const lines = text.split("\n");

    let validEmailCount = 0;
    lines.map(line => {
        let count = 0;
        let sub = line.split(' ');
        let rangeStr = sub[0];
        let firstIdx = parseInt(rangeStr.split('-')[0]);
        let secondIdx = parseInt(rangeStr.split('-')[1]);
        let target = sub[1][0];
        let password = sub[2]
        // for (let i = 0; i < password.length; i++) {
        //     if (target == password[i]) {
        //         count += 1;
        //     }
        // }
        if ((target == password[firstIdx - 1] && target != password[secondIdx - 1]) || (target != password[firstIdx - 1] && target == password[secondIdx - 1])) {
            validEmailCount += 1;
        }
    })
    return validEmailCount;
}

passwordValidator().then(console.log);