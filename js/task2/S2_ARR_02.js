// S2_ARR_02 — Deduplicate

function unique(values) {
  const result = [];
  for (const v of values) {
    if (!result.includes(v)) {
      result.push(v);
    }
  }
  return result;
}

// Tests
console.log(unique([1, 2, 1, 3, 2, 4])); // [1,2,3,4]
