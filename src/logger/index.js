import BaseLogger from './base-logger';

const tableLog = (...columns) => new BaseLogger().log(columns.reduce((acc, cur) => `${acc} | ${cur}`));

const tableTimeLog = (...columns) => tableLog(new Date().toLocaleString(), ...columns);

export { BaseLogger, tableLog, tableTimeLog };
