const fs = require('fs');

const validatePassport = async () => {
    const text = fs.readFileSync("./input.txt", "utf-8");
    const lines = text.split("\n\n");
    let j = 0;
    let counter = 0;
    // console.log(lines[0].split(' '));
    let lineArr = [];
    lines.map(line => {
        lineArr = line.split(/\s/);
        //console.log(lineArr);
        let passportObj = {};
        lineArr.map(entry => {
            let key = entry.split(':')[0];
            let val = entry.split(':')[1];
            passportObj[key] = val;
        });
        if (Object.keys(passportObj).length == 8 || (Object.keys(passportObj).length == 7 && !Object.keys(passportObj).includes('cid'))) {
            console.log(validColor(passportObj['hcl']))
            if (validBirthYear(passportObj['byr']) && validIssueYear(passportObj['iyr']) && validExpirationYear(passportObj['eyr']) && validHeight(passportObj['hgt']) && validColor(passportObj['hcl']) && validEyeColor(passportObj['ecl']) && validPassportNumber(passportObj['pid'])) {
                counter ++;
            }
        };
    });

    return counter;
}

const validBirthYear = (byr) => {
    return (byr >= 1920 && byr <= 2002) ? true : false;

}

const validIssueYear = (iyr) => {
    return (iyr >= 2010 && iyr <= 2020) ? true : false;
}

const validExpirationYear = (eyr) => {
    return (eyr >= 2020 && eyr <= 2030) ? true : false;
}

const validHeight = (hgt) => {
    const measurement = hgt.slice(hgt.length - 2);
    const num = hgt.slice(0, hgt.length - 2);
    if (measurement == "cm") {
        return num >= 160 && num <= 193 ? true : false;
    } else if (measurement == "in") {
        return num >= 59 && num <= 76 ? true : false;
    }
    return false;
}

const validColor = (hcl) => {
    //const colorRegExp = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
    const accepted = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    if (hcl[0] == "#") {
        let digits = hcl.slice(1);
        digits = Array.from(digits);
        for (let i = 0; i < digits.length; i++) {
            if (!accepted.includes(digits[i])) {
                return false;
            }
        }
        return true;
    }
    return false;
}

const validEyeColor = (ecl) => {
    const colors = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
    return colors.includes(ecl) && ecl.length == 3 ? true : false;
}

const validPassportNumber = (pid) => {
    return /^\d{9}$/i.test(pid);
}

validatePassport().then(console.log);