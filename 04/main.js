/// START Sum of range

const range = function (start, end, step = 1) {
    let nums = [];

    if (start > end) {
        while (start >= end) {
            nums.push(start);
            start += step;
        }

        return nums;
    }

    while (start <= end) {
        nums.push(start);
        start += step;
    }

    return nums;
}

const sum = function (numbers) {
    let result = 0;

    for (let num of numbers) {
        result += num;
    }

    return result;
}

console.log(range(1, 10));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));

/// END Sum of range

/// START Reversing an array

const reverseArray = function (arr) {
    let reversed = [];

    arr.forEach(e => {
        reversed.unshift(e);
    });

    return reversed;
}

const reverseArrayInPlace = function (arr) {
    let first;
    let last

    for (let i = 0; i < Math.floor(arr.length/2); i++) {
        first = arr[i];
        last = arr[arr.length - 1 - i];

        arr[i] = last;
        arr[arr.length - 1 - i] = first;
    }
    return arr;
}

let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));
console.log(myArray);

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

/// END Reversing an array

/// START A list

const arrayToList = function(arr) {
    let list = {};

    if (arr.length > 0) {
        list.value = arr[0];
        arr.shift();
        list.rest = arrayToList(arr);
    } else {
        return null;
    }

    return list;
}

const listToArray = function(list) {
    let arr = [];

    arr.push(list.value);

    if (list.rest !== null) {
         arr.push(...listToArray(list.rest));
    }

    return arr;
}

const prepend = function(el, list) {
    list = {
        value: el,
        rest: list
    };

    return list;
}

const nth = function(list, pos) {
    if (pos === 0) {
        return list.value;
    } else {
        return nth(list.rest, pos - 1);
    }
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30, 40, 50, 60, 70]), 5));

/// END A list

/// START Deep comparison

const deepEqual = function (x, y) {
    if (typeof x === "object" && x !== null && typeof y === "object" && y !== null) {
        x_keys = Object.keys(x);
        y_keys = Object.keys(y);

        if (x_keys.length > y_keys.length || y_keys.length > x_keys.length) {
            return false;
        }

        for (let i = 0; i < x_keys.length; i++) {
            if (x_keys[i] !== y_keys[i]) {
                return false;
            }

            return deepEqual(x[x_keys[i]], y[y_keys[i]]);
        }

    } else {
        return x === y;
    }

    return true;
}

let obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2, this: "val"}));

/// END Deep Comparison
