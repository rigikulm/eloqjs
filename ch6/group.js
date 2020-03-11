// File: group.js
//
// Requirements:
// Write a class called Group (since Set is already taken). Like Set, it
// has 'add', 'delete', and 'has' methods. Its constructor creates an empty
// group, add adds a value to the group (but only if it isn’t already a
// member), delete removes its argument from the group (if it was a member),
// and has returns a Boolean value indicating whether its argument is a member
// of the group.

class Group {
    constructor() {
        this._group = {};
    }

    add(value) {
        this._group[value] = 1;
    }

    delete(item) {
        delete this._group[item];
    }

    has(item) {
        return item in this._group;
    }
}

let g = new Group();
console.log(g._group);
g.add(3);
g.add(99);
g.add(17);
console.log(g._group);
g.delete(99);
console.log(g._group);
console.log(`${g.has(3)}`);
console.log(`${g.has(101)}`);