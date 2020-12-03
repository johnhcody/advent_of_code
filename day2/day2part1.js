const fs = require("fs");

const passwordReader = async () => {
    const text = fs.readFileSync("./input.txt", "utf-8");
    const lines = text.split("\n");

    let validEmailCount = 0;
    lines.map(line => {
        let count = 0;
        let sub = line.split(' ');
        let rangeStr = sub[0];
        let minNum = parseInt(rangeStr.split('-')[0]);
        let maxNum = parseInt(rangeStr.split('-')[1]);
        let target = sub[1][0];
        let password = sub[2]
        for (let i = 0; i < password.length; i++) {
            if (target == password[i]) {
                count += 1;
            }
        }
        if (count >= minNum && count <= maxNum) {
            validEmailCount += 1;
        }
    })
    return validEmailCount;
}

passwordReader().then(console.log);