const fs = require('fs');

const validatePassport = async () => {
    const text = fs.readFileSync("./input.txt", "utf-8");
    const lines = text.split("\n");
    passportObj = {};
    let j = 0;
    let counter = 0;
    for (let i = 0; i < lines.length; i++) {
        passportObj[j] = {};
        // console.log(lines[i]);
        const cid = 'cid';
        if (lines[i] !== '') {
            let params = lines[i].split(' ');
            let newObj = {};
            params.map(param => {
                let abrev = param.split(':')[0];
                let value = param.split(':')[1];
                newObj[abrev] = value;
                // console.log(newObj);
                passportObj[j] = newObj;
                
            })

            if (Object.keys(passportObj[j]).length == 8 || (Object.keys(passportObj[j]).length == 7 && !Object.keys(passportObj[j]).includes(cid))) counter ++;
        } else {
            j++;
        }
    }
    //console.log(passportObj);
    return counter;
};

validatePassport().then(console.log);