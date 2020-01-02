import { BaseLogger } from './logger/index';
import { foldl } from './array-operations';
import './index.scss';

BaseLogger.log(foldl([1, 2, 3], (acc, cur) => acc + cur, 0));