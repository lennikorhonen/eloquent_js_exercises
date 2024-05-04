const min = function(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
console.log(min(4, 1));

const isEven = function(n) {
    if (n === 0) {
        return true;
    } else if (n === 1) {
        return false;
    } else if (n < 0) {
        return isEven(n+2);
    } else {
        return isEven(n-2);
    }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(-50));

const countChars = function(str, char) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            counter++;
        }
    }
    return counter;
}

const countBs = function(str) {
    // let counter = 0;
    // for (let i = 0; i < str.length; i++) {
    //     if (str[i] === "B") {
    //         counter++;
    //     }
    // }
    // return counter;
    return countChars(str, "B");
}

console.log(countBs("BOB"));
console.log(countChars("kakkerlak", 'k'));
