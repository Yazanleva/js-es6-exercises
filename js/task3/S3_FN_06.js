// S3_FN_06 — Map values (fn is an arrow applied to each value)

function mapValues(obj, fn) {
  const out = {};
  for (const k in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, k)) {
      out[k] = fn(obj[k]);
    }
  }
  return out;
}

// Tests
const prices = { apple: 2, orange: 3 };
const doubled = mapValues(prices, v => v * 2);

console.log(doubled); // { apple: 4, orange: 6 }
console.log(prices);  // original unchanged
