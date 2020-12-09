const fs = require("fs");

const seatChecker = async () => {
    const text = fs.readFileSync("./input.txt", "utf-8");
    const lines = text.split("\n");
    //console.log(lines);
    
    //const test = "FBFBBFFRLR"

    let maxSeatId = 0;

    lines.map(line => {
        let row = findRow(line);
        let col = findCol(line);
        let seatId = row * 8 + col;
        maxSeatId = seatId > maxSeatId ? seatId : maxSeatId
        // if (seatId > maxSeatId) maxSeatId = seatId; 
    })
    return maxSeatId;
}
    

// lines[0] == 


const findRow = (row) => {
    let min = 0;
    let max = 127;
    for (let i = 0; i < 6; i++) {
        let difference = max - min;
        if (row[i] == "B") {
            // min = Math.floor(max / 2) + 1;
            min += (Math.floor(difference / 2) + 1);
        } else if (row[i] == "F") {
            max = Math.floor(min + (difference / 2));
        }
    }

    return row[5] == "F" ? min : max
}

const findCol = (col) => {
    let maxCol = 7;
    let minCol = 0;
    for (let j = 6; j < col.length; j++) {
        let difference = maxCol - minCol;
        if (col[j] == "R") {
            // minCol = Math.floor(maxCol / 2) + 1;
            minCol += (Math.floor(difference / 2) + 1);
        } else if (col[j] == "L") {
            maxCol = Math.floor(minCol + (difference / 2));
        }
    }
    //console.log(minCol)
    return col[9] == "L" ? minCol : maxCol
}



seatChecker().then(console.log);
