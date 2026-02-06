// S1_VAR_07 — Coercion via unary plus

function toNumberOrNull(x) {
  if (typeof x === "string") {
    const n = +x;
    return Number.isNaN(n) ? null : n;
  }
  return null;
}

// Tests
const tests = ["12", "12.5", " 12 ", "12x", "", 5];

tests.forEach(v => {
  console.log(JSON.stringify(v), "=>", toNumberOrNull(v));
});
