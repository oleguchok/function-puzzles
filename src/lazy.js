export default function lazy(fn, ...args) {
    return () => fn(args);
}