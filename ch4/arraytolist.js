// File: arraytolist.js
//
// arrayToList:
// Write a function that given an array, produces a list structure
// with one link (node) per array element.
//
// listToArray:
// Write a function that accepts a list as a parameter, and returns an array.
//

const lastNode = (list) => {
    let current = list;
    while (current.next != null) {
        current = current.next;
    }
    return current;
}

const appendNode = (list, value)  => {
    let newNode = {"value": value, "next": null};

    // If there is not a list create one
    if (list === null) {
        return newNode;
    }

    // Walk the list looking for the end
    let last = lastNode(list);
    last.next = newNode;
    return list;
}

function arrayToList(array) {
    let list = null;
    for (let item of array) {
        list = appendNode(list, item);
    }
    return list;
}

function listToArray(list) {
    let array = [];
    let current = list;

    while (current != null) {
        array.push(current.value);
        current = current.next;
    }
    return array;
}

exports.arrayToList = arrayToList;
exports.listToArray = listToArray;