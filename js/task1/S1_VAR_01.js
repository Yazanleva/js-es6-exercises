// S1_VAR_01 — Declare & observe

var courseName = "JavaScript ES6";
let studentCount = 25;
const isOnline = true;

const rows = [
  { name: "courseName", value: courseName, type: typeof courseName },
  { name: "studentCount", value: studentCount, type: typeof studentCount },
  { name: "isOnline", value: isOnline, type: typeof isOnline },
];

console.log("S1_VAR_01 output:");
console.table(rows);
