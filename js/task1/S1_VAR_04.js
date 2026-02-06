// S1_VAR_04 — Safe type label

function typeLabel(value) {
  if (value === null) return "null";
  return typeof value;
}

// Tests
const tests = [
  null,
  undefined,
  42,
  "42",
  true,
  {},
  [],
  () => {}
];

tests.forEach(v => {
  console.log(v, "=>", typeLabel(v));
});
