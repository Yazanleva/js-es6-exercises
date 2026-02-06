// S2_FOR_06 — Nested arrays

function sumNested(matrix) {
  let total = 0;

  for (const row of matrix) {
    for (const n of row) {
      total += n;
    }
  }

  return total;
}

// Tests
console.log(sumNested([[1, 2], [3, 4]]));       // 10
console.log(sumNested([[10], [20, 30], []]));   // 60
