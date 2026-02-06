// S3_OBJ_06 — Group by (key is a property name). Return { value: [items...] }

function groupBy(items, key) {
  const out = {};
  for (const item of items) {
    const groupKey = String(item?.[key]);
    if (!Object.prototype.hasOwnProperty.call(out, groupKey)) {
      out[groupKey] = [];
    }
    out[groupKey].push(item);
  }
  return out;
}

// Tests
const people = [
  { name: "Ola", age: 20 },
  { name: "Eva", age: 20 },
  { name: "Adam", age: 30 },
];

console.log(groupBy(people, "age"));
// { "20": [..], "30": [..] }
