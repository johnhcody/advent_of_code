const fs = require("fs");

const passwordReader = async () => {
    const text = fs.readFileSync("./input.txt", "utf-8");
    const lines = text.split("\n");
    const numbers = lines.map(Number);

    console.log(numbers);

}

passwordReader().then(console.log);