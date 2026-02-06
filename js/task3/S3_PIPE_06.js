// S3_PIPE_06 — Safe pipeline

function pipeSafe(...fns) {
  return (x) => {
    let value = x;
    try {
      for (const fn of fns) {
        value = fn(value);
      }
      return { ok: true, value };
    } catch (error) {
      return { ok: false, error: String(error?.message ?? error) };
    }
  };
}

// Tests
const toNumber = s => {
  const n = +s;
  if (Number.isNaN(n)) throw new Error("not a number");
  return n;
};

const half = n => {
  if (n === 0) throw new Error("cannot half zero");
  return n / 2;
};

const safe = pipeSafe(toNumber, half);

console.log(safe("10")); // { ok: true, value: 5 }
console.log(safe("x"));  // { ok: false, error: "not a number" }
console.log(safe("0"));  // { ok: false, error: "cannot half zero" }
