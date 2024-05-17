require('./scripts.js');

/// START Flattening

function flatten(array) {
    return array.reduce((previous, current) => previous.concat(current));
}

let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(flatten(arrays));

/// END Flattening

/// START Your own loop

function loop(value, test, update, body) {
    if (test(value)) {
        body(value);
        value = update(value);
        loop(value, test, update, body);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);

/// END Your own loop

/// START Everything

// Using loop
// function every(array, test) {
//     for (let val of array) {
//         if (!test(val)) return false;
//     }
//
//     return true;
// }

// Using some
function every(array, test) {
    let flag = true;
    array.some((val) => {
        if (!test(val)) flag = false;
    });

    return flag;
}

console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));

/// END Everything

/// START Dominant writing direction

function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            return script;
        }
    }

    return null;
}

function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        let direction = groupName(item);
        let known = counts.find(c => c.direction == direction);
        if (!known) {
            counts.push({direction, count: 1});
        } else {
            known.count++;
        }
    }

    return counts;
}

function dominantDirection(text) {
    let scripts = countBy(text, (char) => {
        let script = characterScript(char.codePointAt(0));

        return script ? script.direction : "none";
    }).filter(({name}) => name != "none");

    if (scripts.length === 0) {
        return "ltr";
    }

    console.log(scripts);

    return scripts.reduce((a, b) => (a.count > b.count
        ? a.direction
        : b.direction
    ));
}

console.log(dominantDirection("Hello!"));
console.log(dominantDirection("Hey, مساء الخير"));

/// END Dominant writing direction
