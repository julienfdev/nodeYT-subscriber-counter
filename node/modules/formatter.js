// Formatting a string depending on the subs parameter (up to 9.99M subs, after that you can buy a proper sub counter ^^)
const subToString = (subs) => {
    if (subs < 1000) {
        return `${String(subs)} \n`;
    } else if (subs < 10000) {
        const stringSub = String(subs);
        const integerPart = stringSub.slice(0, 1);
        const decimalPart = stringSub.slice(1, 3);
        return `${integerPart}.${decimalPart}k \n`;
    } else if (subs < 100000) {
        const stringSub = String(subs);
        const integerPart = stringSub.slice(0, 2);
        const decimalPart = stringSub.slice(2, 3);
        return `${integerPart}.${decimalPart}k \n`;
    } else if (subs < 1000000) {
        const stringSub = String(subs);
        const integerPart = stringSub.slice(0, 3);
        const decimalPart = stringSub.slice(3, 4);
        return `${integerPart}.${decimalPart}k \n`;
    }else if (subs < 10000000) {
        const stringSub = String(subs);
        const integerPart = stringSub.slice(0, 1);
        const decimalPart = stringSub.slice(1, 3);
        return `${integerPart}.${decimalPart}M \n`;
    }
    else{
        return 'Overflow\n';
    }
}

module.exports = subToString;