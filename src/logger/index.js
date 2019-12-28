const log = (message) => console.log(message);

const tableLog = (...columns) => log(columns.reduce((acc, cur) => `${acc} | ${cur}`));

const tableTimeLog = (...columns) => tableLog(new Date().toLocaleString(), ...columns);

export { BaseLogger, tableLog, tableTimeLog };