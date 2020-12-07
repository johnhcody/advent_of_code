const fs = require('fs');

const countTrees = async () => {
    const text = fs.readFileSync("./input.txt", "utf-8");
    const lines = text.split("\n");
    const lineLength = lines[0].length;
    let treeCount = 0;
    let j = 0;
    for (let i = 0; i < lines.length; i++) {
        if (lines[i][j % lineLength] == '#') {
            treeCount += 1;
        }
        j += 3;
    }
    return treeCount
};

countTrees().then(console.log); // 167