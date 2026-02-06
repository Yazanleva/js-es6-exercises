// S3_OBJ_02 — Merge config (shallow). Overrides win. Do not mutate inputs.

function mergeDefaults(defaults, overrides) {
  return { ...defaults, ...overrides };
}

// Tests
const defaults = { host: "localhost", port: 3000, debug: false };
const overrides = { port: 8080, debug: true };
const merged = mergeDefaults(defaults, overrides);

console.log("merged:", merged);
console.log("defaults unchanged:", defaults);
console.log("overrides unchanged:", overrides);
