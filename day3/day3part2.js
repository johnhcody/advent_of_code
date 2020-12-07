const fs = require('fs');

const countTrees = (right, down) => {
    const text = fs.readFileSync("./input.txt", "utf-8");
    const lines = text.split("\n");
    const lineLength = lines[0].length;
    let treeCount = 0;
    let j = 0;
    for (let i = 0; i < lines.length; i+= down) {
        if (lines[i][j % lineLength] == '#') {
            treeCount += 1;
        }
        j += right;
    }
    return treeCount
};


const multiplyTrees = async (slopeArr) => {

    treeProduct = 1;

    slopeArr.map(slope => {
        let right = slope[0];
        let down = slope[1];
        treeProduct *= countTrees(right, down)
    });

    return treeProduct;
}

multiplyTrees([[1,1], [3,1], [5,1], [7,1], [1,2]]).then(console.log);