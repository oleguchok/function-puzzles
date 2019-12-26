const memoization = (fn) => {
    const memo = {};

    return (...args) => {
        let key = JSON.stringify(args);
        if (memo[key]) {
            return memo[key];
        }

        let value = fn(...args);
        memo[key] = value;
        return value;
    }
}

export default memoization;