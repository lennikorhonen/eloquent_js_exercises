/// START A vector type

class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    get length() {
        return Math.sqrt((this.x ** 2) + (this.y ** 2));
    }

    plus(vec) {
        return new Vec(this.x + vec.x, this.y + vec.y);
    }

    minus(vec) {
        return new Vec(this.x - vec.x, this.y - vec.y);
    }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);

/// END A vector type

/// START Groups

class Group {
    constructor(group) {
        this.group = group;
    }

    add(value) {
        if (this.group.indexOf(value) === -1) {
            this.group.push(value);
        }
    }

    delete(value) {
        let valueIndex = this.group.indexOf(value);
        if (valueIndex !== -1) {
            this.group.splice(valueIndex, 1);
        }
    }

    has(value) {
        if (this.group.indexOf(value) !== -1) {
            return true;
        }

        return false;
    }

    static from(values) {
        return new Group(values);
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));

group.add(10);
group.delete(10);
console.log(group.has(10));

/// END Groups

/// START Iterable groups

class GroupIterator {
    constructor(group) {
        this.group = group;
    }

    next() {
        if (this.group == null) {
            return {done: true};
        }

        let value = this.list.value;
        this.list = this.list.rest;
        return {value, done: false};
    }
}

GroupIterator.prototype[Symbol.iterator] = function() {
    return new Group(this);
}

for (let value of Group.from(["a", "b", "c"]).group) {
    console.log(value);
}

/// END Iterable groups
