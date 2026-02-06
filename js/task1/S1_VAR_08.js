// S1_VAR_08 — Big integers

function safeAdd(a, b) {
  const bothIntegers = Number.isInteger(a) && Number.isInteger(b);

  if (
    bothIntegers &&
    (Math.abs(a) > Number.MAX_SAFE_INTEGER ||
     Math.abs(b) > Number.MAX_SAFE_INTEGER)
  ) {
    const result = BigInt(a) + BigInt(b);
    console.log("Using BigInt");
    return result;
  }

  console.log("Using Number");
  return a + b;
}

// Tests
const tests = [
  [1, 2],
  [Number.MAX_SAFE_INTEGER, 1],
  [9007199254740993, 10],
];

tests.forEach(([a, b]) => {
  console.log(a, "+", b, "=", safeAdd(a, b));
});
