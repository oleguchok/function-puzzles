import partial from "./partial-application";
import curry from "./curry";
import avgEven from "./even-numbers-average";
import { log, tableLog, tableTimeLog } from "./logger/index";

console.log(avgEven([1,23,2,6,12,0]));

log("Hello world !");
tableLog('Hello', 'World', '!');
tableTimeLog('Hello', 'World', '!');