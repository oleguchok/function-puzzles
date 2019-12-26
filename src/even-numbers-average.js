import { filter, foldl } from "./array-operations";

const isEven = (n) => !(n % 2);

const add = (acc, cur) => {
    return {
        sum: acc.sum + cur,
        count: ++acc.count
    };
};

const average = ({sum, count}) => {
    return sum / count;
}

export default function avgEven([...array]) {
    return average(
        foldl(
            filter(array, isEven), add, {sum:0,count:0}
        )
    );
}
