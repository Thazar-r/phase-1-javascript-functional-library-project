// myEach function
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i]);
        }
    } else {
        for (let key in collection) {
            callback(collection[key]);
        }
    }
    return collection;
}

// myMap function
function myMap(collection, callback) {
    let result = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            result.push(callback(collection[i], i));
        }
    } else {
        for (let key in collection) {
            result.push(callback(collection[key], key));
        }
    }
    return result;
}

// myReduce function
function myReduce(collection, callback, acc) {
    let startingIndex = 0;
    if (Array.isArray(collection)) {
        if (acc === undefined) {
            acc = collection[0];
            startingIndex = 1;
        }
        for (let i = startingIndex; i < collection.length; i++) {
            acc = callback(acc, collection[i], collection);
        }
    } else {
        let keys = Object.keys(collection);
        if (acc === undefined) {
            acc = collection[keys[0]];
            startingIndex = 1;
        }
        for (let i = startingIndex; i < keys.length; i++) {
            acc = callback(acc, collection[keys[i]], collection);
        }
    }
    return acc;
}

// myFind function
function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
                return collection[i];
            }
        }
    } else {
        let keys = Object.keys(collection);
        for (let i = 0; i < keys.length; i++) {
            if (predicate(collection[keys[i]])) {
                return collection[keys[i]];
            }
        }
    }
}

// myFilter function
function myFilter(collection, predicate) {
    let result = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
                result.push(collection[i]);
            }
        }
    } else {
        let keys = Object.keys(collection);
        for (let i = 0; i < keys.length; i++) {
            if (predicate(collection[keys[i]])) {
                result.push(collection[keys[i]]);
            }
        }
    }
    return result;
}

// mySize function
function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length;
    } else {
        return Object.keys(collection).length;
    }
}

// myFirst function
function myFirst(array, n) {
    if (n === undefined) {
        return array[0];
    } else {
        return array.slice(0, n);
    }
}

// myLast function
function myLast(array, n) {
    if (n === undefined) {
        return array[array.length - 1];
    } else {
        return array.slice(-n);
    }
}

// myKeys function
function myKeys(object) {
    return Object.keys(object);
}

// myValues function
function myValues(object) {
    let keys = Object.keys(object);
    return keys.map(key => object[key]);
}
