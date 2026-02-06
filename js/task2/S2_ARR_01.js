// S2_ARR_01 — Clean numbers

function cleanNumbers(arr) {
  return arr
    .map(s => +s)
    .filter(n => !Number.isNaN(n));
}

// Tests
const input = [" 1 ", "x", " 2", "3.5", "foo"];
console.log(cleanNumbers(input)); // [1, 2, 3.5]
