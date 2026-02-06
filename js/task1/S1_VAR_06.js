// S1_VAR_06 — NaN pitfalls

function classifyNumberLike(x) {
  if (typeof x === "number" && Number.isNaN(x)) {
    return "nan";
  }

  if (typeof x === "number") {
    return "number";
  }

  return "not-a-number";
}

// Tests
const tests = [NaN, 0, "0", "abc", undefined];

tests.forEach(v => {
  console.log(v, "=>", classifyNumberLike(v));
});
