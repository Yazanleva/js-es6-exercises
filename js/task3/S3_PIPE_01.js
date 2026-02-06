// S3_PIPE_01 — pipe(...fns) left-to-right (unary)

function pipe(...fns) {
  return (x) => fns.reduce((v, fn) => fn(v), x);
}

// Tests
const add1 = x => x + 1;
const double = x => x * 2;

const f = pipe(add1, double); // (x+1) then *2
console.log(f(3)); // 8
