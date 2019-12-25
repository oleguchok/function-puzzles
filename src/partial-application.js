export default function partial(fn, ...args) {
    return (...leftArgs) => fn(...args, ...leftArgs);
}