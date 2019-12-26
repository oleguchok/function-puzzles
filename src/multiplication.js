import { foldl } from "./array-operations";

const multiply = (a,b) => a * b;

const multiplication = ([first, ...args]) => foldl(args, multiply, first);

export default multiplication;