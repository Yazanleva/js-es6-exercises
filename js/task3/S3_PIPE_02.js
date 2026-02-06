// S3_PIPE_02 — compose(...fns) right-to-left (unary)

function compose(...fns) {
  return (x) => fns.reduceRight((v, fn) => fn(v), x);
}

// Tests
const add1 = x => x + 1;
const double = x => x * 2;

const g = compose(add1, double); // double first, then add1
console.log(g(3)); // 7
