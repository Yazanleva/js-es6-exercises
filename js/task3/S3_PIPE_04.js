// S3_PIPE_04 — Array processing pipeline

function pipe(...fns) {
  return (x) => fns.reduce((v, fn) => fn(v), x);
}

const filterValid = arr => arr.filter(s => !Number.isNaN(+s));
const toNumbers = arr => arr.map(s => +s);
const doubleAll = arr => arr.map(n => n * 2);
const sum = arr => arr.reduce((acc, n) => acc + n, 0);

const process = pipe(filterValid, toNumbers, doubleAll, sum);

// Tests
console.log(process(["1", " x ", "2", "3"])); // (1+2+3)*2 = 12
