const fs = require("fs");

const treeCounter = async () => {
    const text = fs.readFileSync("./input.txt", "utf-8");
    const lines = text.split("\n");

    let j = 3;
    let treeCount = 0;
    let i = 1;
    //console.log(lines.length);
    //console.log(lines[2 % lines[0].length][6 % lines[0].length]);
    while (i < lines.length + 3) {
        const lineLength = lines[0].length;
        if (lines[i % lineLength][j % lineLength] == "#") {
            treeCount += 1;
        }
        i += 1;
        j += 3;
    }
    return treeCount;

}

treeCounter().then(console.log);