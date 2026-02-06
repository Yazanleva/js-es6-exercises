// S3_FN_04 — Map/filter/reduce with arrows
// "sum of squares of even numbers"

function sumSquaresOfEvens(nums) {
  return nums
    .filter(n => n % 2 === 0)
    .map(n => n * n)
    .reduce((acc, n) => acc + n, 0);
}

// Tests
console.log(sumSquaresOfEvens([1, 2, 3, 4])); // 20 (2^2 + 4^2)
console.log(sumSquaresOfEvens([]));          // 0
