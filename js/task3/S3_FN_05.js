// S3_FN_05 — Higher-order predicate

const atLeast = min => (n => n >= min);

// Tests (use with filter)
const nums = [1, 5, 10, 15];
console.log(nums.filter(atLeast(10))); // [10, 15]
