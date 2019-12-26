const foldl = ([first, ...rest], callback, initialValue) => {
    if (!rest.length) {
        return callback(initialValue, first);
    }

    return foldl(rest, callback, callback(initialValue, first));
}

const map = ([first, ...rest], callback) => {
    if (!rest.length) {
        return [callback(first)]
    }

    return [callback(first), ...map(rest, callback)];
}

const filter = ([first, ...rest], callback) => {
    if (first === undefined) {
        return [];
    }

    if (callback(first)) {
        return [first, ...filter(rest, callback)];
    }

    return [...filter(rest, callback)];
}

export { foldl, map, filter };